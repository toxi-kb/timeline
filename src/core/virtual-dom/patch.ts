import { VirtualMarkup, VirtualNode, VirtualMarkupElement } from './interfaces';
import { create } from './create';

export const patch = ($node: VirtualNode, prevMarkup: VirtualMarkup, nextMarkup: VirtualMarkup) => {
    if (nextMarkup === undefined) {
        $node.remove();
    } else if (typeof prevMarkup === 'string' && typeof nextMarkup === 'string') {
        if (prevMarkup !== nextMarkup) {
            ($node as Text).textContent = nextMarkup;
        }
    } else if (
        typeof prevMarkup === 'object' && 'tagName' in prevMarkup &&
        typeof nextMarkup === 'object' && 'tagName' in nextMarkup
    ) {
        if (prevMarkup.tagName === nextMarkup.tagName) {
            patchAttrs($node as HTMLElement, prevMarkup.attrs, nextMarkup.attrs);
            patchListeners($node as HTMLElement, prevMarkup['listeners'], nextMarkup['listeners']);
            prepatchChildren($node as HTMLElement, prevMarkup.children, nextMarkup.children);
            patchChildren($node as HTMLElement, prevMarkup.children, nextMarkup.children);
        } else {
            $node.replaceWith(create(nextMarkup));
        }
    } else if (
        typeof prevMarkup === 'object' && 'componentId' in prevMarkup &&
        typeof nextMarkup === 'object' && 'componentId' in nextMarkup
    ) {
        if (prevMarkup.componentId !== nextMarkup.componentId) {
            $node.replaceWith(nextMarkup.node);
        }
    } else {
        $node.replaceWith(create(nextMarkup));
    }
}

const patchAttrs = (
    $node: HTMLElement,
    prevAttrs: VirtualMarkupElement['attrs'] = {},
    nextAttrs: VirtualMarkupElement['attrs'] = {}
) => {
    Object.keys(prevAttrs).forEach((attrName) => {
        if (nextAttrs[attrName] === undefined) {
            $node.removeAttribute(attrName);
        }
    });

    Object.keys(nextAttrs).forEach((attrName) => {
        if (nextAttrs[attrName] !== prevAttrs[attrName]) {
            $node.setAttribute(attrName, nextAttrs[attrName]);
        }
    });
}

const patchListeners = (
    $node: HTMLElement,
    prevListeners: VirtualMarkupElement['listeners'] = {},
    nextListeners: VirtualMarkupElement['listeners'] = {}
) => {
    Object.keys(prevListeners).forEach((eventType: keyof HTMLElementEventMap) =>
        $node.removeEventListener(eventType, prevListeners[eventType]));
    Object.keys(nextListeners).forEach((eventType: keyof HTMLElementEventMap) =>
        $node.addEventListener(eventType, nextListeners[eventType]));
}

const patchChildren = (
    $parent: HTMLElement, childrenPrev: VirtualMarkup[] = [], childrenNext: VirtualMarkup[] = []
) => {
    const size = Math.max(childrenPrev.length, childrenNext.length);
    const childNodes = [ ...$parent.childNodes ];

    for (let i = 0; i < size; i++) {
        if (childrenPrev[i] === undefined) {
            $parent.appendChild(create(childrenNext[i]));
        } else if (childrenNext[i] === undefined) {
            $parent.removeChild(childNodes[i]);
        } else {
            patch(childNodes[i] as VirtualNode, childrenPrev[i], childrenNext[i]);
        }
    }
}

const prepatchChildren = (
    $parent: HTMLElement, childrenPrev: VirtualMarkup[] = [], childrenNext: VirtualMarkup[] = []
) => {
    $parent.childNodes.forEach(($child, idx) => {
        const prevMarkup = childrenPrev[idx];
        const nextMarkup = childrenNext[idx];

        if (typeof prevMarkup === 'object' && 'componentId' in prevMarkup) {
            if (typeof nextMarkup !== 'object' || !('componentId' in nextMarkup) ||
                prevMarkup.componentId !== nextMarkup.componentId
            ) {
                $child.replaceWith(document.createElement('div'));
            }
        }
    });
}
