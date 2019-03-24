import { VirtualMarkup, VirtualMarkupElement, VirtualNode } from './interfaces';

export const create = (markup: VirtualMarkup): VirtualNode => {
    let $node: VirtualNode;
    
    if (typeof markup === 'string') {
        $node = createTextNode(markup);
    } else if ('tagName' in markup) {
        $node = createElementNode(markup);
    } else {
        $node = markup.node;
    }

    return $node;
}

const createTextNode = (text: string): Text => {
    return document.createTextNode(text);
}

const createElementNode = (markup: VirtualMarkupElement): HTMLElement => {
    const { attrs = {}, listeners = {}, children = [], tagName } = markup;
    const $node = document.createElement(tagName);

    Object.keys(attrs).forEach((attrName) =>
        $node.setAttribute(attrName, attrs[attrName]));

    Object.keys(listeners).forEach((eventType: keyof HTMLElementEventMap) =>
        $node.addEventListener(eventType, listeners[eventType]));

    children.forEach((child) => $node.appendChild(create(child)));

    return $node;
}
