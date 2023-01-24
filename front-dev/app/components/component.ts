const is = 'wc-component';
const styleURL = `@import url('/assets/css/dev.css');`;
class Component extends HTMLElement{
    protected props?: any;
    protected state?: any;
    constructor(){
        super();
    }
    build(props: any = {},template?: JQuery): void{
        this.shadowRoot ?? this.attachShadow({mode:'open'});
        const shadowRoot = <ShadowRoot> this.shadowRoot;
        this.props = props;
        this.state = {...props};
        if(template  && shadowRoot){
            shadowRoot.innerHTML = template.html();
            template[0].classList.forEach(
                (classe) =>
                    this.classList.add(classe)    
            );
        }
        
    }
    render(): void{}
    static get is(): string{
        return is;
    }
    static get style(): HTMLStyleElement{
        const DefaultStyle =  $(`
            <style>
                ${styleURL}
            </style>
        `)[0];
        return <HTMLStyleElement> DefaultStyle;
    }
    stylize(newstyle: HTMLStyleElement = Component.style): void{
        if(newstyle){
            const shadowRoot = <ShadowRoot> this.shadowRoot;
            shadowRoot.appendChild(newstyle);
        }
    }
}
window.customElements.define(is,Component);
export default Component;