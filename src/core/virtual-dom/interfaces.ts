export interface VirtualMarkupElement {
    tagName: keyof HTMLElementTagNameMap;
    attrs?: { [key: string]: string };
    listeners?: { [eventType in keyof HTMLElementEventMap]?: (e: Event) => void };
    children?: VirtualMarkup[];
}

export interface VirtualComponent {
    componentId: string;
    node: HTMLElement;
}

export type VirtualMarkup = VirtualMarkupElement | VirtualComponent | string;

export type VirtualNode = HTMLElement | Text;