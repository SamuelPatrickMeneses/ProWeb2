import Component from './component.js';
const is = 'wb-bol';
const template = $(`
    <template id="bol" class="h-8 w-8">
        <div class="w-full h-full relative">
            <input class="marck opacity-0 z-10 absolute top-0 left-0 nex:checked:bg-paleta-1 nex:ring-2 nex:ring-paleta-1 w-full h-full" type="checkbox">
            <div class="b bg-paleta-5 absolute top-0 left-0 w-full h-full rounded-full transition-all duration-200"></div>
        </div>
    </template>`
);
class Bol extends Component{
    protected checkBox  ?: HTMLInputElement;
    public    index  : number = 0;
    constructor(){
        super();
    }
    build(props = {}, templatesub: JQuery = template): void{
        super.build(props, templatesub ?? template);

        this.checkBox = <HTMLInputElement> this.sRoot.querySelector('input');
        
        this.stylize();
        this.render();
    }
    render(): void{
        if(this.checkBox)
            this.checkBox.checked = this.state.value;
    }
    static get is(): string{
        return is;
    }
    get value(): boolean | number{
            return <boolean> this.checkBox?.checked;
    }
    set value(value: boolean | number){
        this.state.value = Boolean(value);
        this.render();
    }
}
window.customElements.define(is,Bol);
export default Bol;