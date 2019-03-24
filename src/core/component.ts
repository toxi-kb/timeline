import { VirtualMarkup, VirtualComponent } from './virtual-dom/interfaces';
import { create } from './virtual-dom/create';
import { patch } from './virtual-dom/patch';

export abstract class Component<Props = null, State = null> {
    
    protected abstract render(): VirtualMarkup;
    protected onInit(): void {};
    
    private currentDOM: HTMLElement;
    private currentMarkup: VirtualMarkup;
    private components: { [key: string]: Component<{}, {}> } = {};

    constructor(protected className: string, protected props: Props = null, protected state: State = null) {}

    public init(): HTMLElement {
        this.currentMarkup = this.render();
        this.currentDOM = create(this.currentMarkup) as HTMLElement;
        this.onInit();

        return this.currentDOM;
    }

    public update(props: Props): HTMLElement {
        this.props = props;
        this.patch();

        return this.currentDOM;
    }

    protected renderComponent<T extends Component<P, {}>, P>(
        componentId: string, cls: new (props: P) => T, props?: P
    ): VirtualComponent {
        let node: HTMLElement;

        if (this.components[componentId] == null) {
            this.components[componentId] = new cls(props);

            node = this.components[componentId].init();
        } else {
            node = this.components[componentId].update(props);
        }

        return { componentId, node };
    }

    protected setState(update: Partial<State>): void {
        this.state = { ...this.state, ...update };
        this.patch();
    }

    private patch(): void {
        const nextMarkup = this.render();
        
        patch(this.currentDOM, this.currentMarkup, nextMarkup);
        this.currentMarkup = nextMarkup;
    }

}
