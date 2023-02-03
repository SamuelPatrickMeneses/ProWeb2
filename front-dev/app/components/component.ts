const is = 'wc-component';
const styleURL = `@import url('/assets/css/dev.css');`;

function parseNamedNodeMap(map: NamedNodeMap):any{
    let returnObgect: any = {};
    for(let i = 0; i < map.length;i++){
        let mapNode = map[i];
        returnObgect[mapNode.nodeName] = mapNode.nodeValue;
    }
    return returnObgect;
}

class Component extends HTMLElement{
    protected props !: any;
    protected state !: any;
    protected sRoot !: ShadowRoot;
    constructor(){
        super();
        if(this.attributes.length)
            this.build(parseNamedNodeMap(this.attributes))
    }
    build(props: any = {},template?: JQuery): void{
        this. shadowRoot ?? (this.sRoot = this.attachShadow({mode:'open'}));
        this.props = props;
        this.state = {...props};
        if(template){
            this.sRoot.innerHTML = template.html();
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
        if(newstyle)
            this.sRoot.appendChild(newstyle);
    }
}
window.customElements.define(is,Component);
export default Component;