import Component from './component.js';
const is = 'wb-clumn-button';
const template = $(`
    <template id="column-button">
        <div class="py-2 text-center w-16 h-16 text-4xl transition-colors duration-200 bg-paleta-3
        rounded-md box-border ring-2 ring-paleta-5 text-paleta-5 
        active:ring-paleta-3 active:bg-paleta-5 
        active:text-paleta-3"></div>
    </template>
`);
class ColumnButton extends Component{
    private button !: HTMLDivElement;
    build(props: any){
        super.build(props,template);
        this.button = <HTMLDivElement> this.sRoot.querySelector('div');
        this.button.innerText = props.text;
        this.onclick = props.onclick;
        this.stylize();
    }
    show(){
        if(this.classList.contains('hidden'))
            this.classList.remove('hidden');
    }
    hide(){
        if(!this.classList.contains('hidden'))
            this.classList.add('hidden');
    }
    static get is(){
        return is;
    }
}
window.customElements.define(is,ColumnButton);
export default ColumnButton;