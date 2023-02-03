import Component from './component.js';
import privado from '../util/privado.js';
const is = 'wb-label';
const template = $(`    
    <template id="label" class="min-w-1/2 min-h-[56px]">
        <div class="flex rounded-md items-center bg-paleta-5 text-2xl
         text-paleta-1 son:text-left p-3 min-h-[56px]">

            <input type="text" class="bg-paleta-5 px-2 w-full rounded-md
             focus:outline-none focus:ring-1 focus:ring-paleta-1  ">
             
            <label for="" class="w-full px-2  text-center"></label>
        </div>
    </template>
`);
class Label extends Component{
    private input     !: HTMLInputElement;
    private label     !: HTMLLabelElement;
    private container !: HTMLDivElement;
    private readOnly   : boolean = false;
    constructor(){
        super();
    }
    build(props: any){
        super.build(props,template);

        this.input = <HTMLInputElement> this.sRoot.querySelector('input');
        this.label =  <HTMLLabelElement>this.sRoot.querySelector('label');
        this.container = <HTMLDivElement>this.sRoot.querySelector('div');

        this.input.value = this.state.value;
        this.label.innerText = this.state.value;
        this.readOnly = props.readOnly;

        this.container.removeChild(this.input);

        this.onclick = () => {
            if(this.readOnly)
                return;
            this.container.removeChild(this.label);
            this.container.appendChild(this.input);
            this.input.focus();   
            this.render();
        }; 

        this.input.onblur = () => {
            this.container.removeChild(this.input);
            this.container.appendChild(this.label);
            this.render();
        };

        this.input.onchange = () => this.state.value = this.input.value;

        this.stylize();
        this.render();
    }
    render(){
        if(this.container.children.item(0) instanceof HTMLInputElement)
            this.input.value = this.state.value;
        else
            this.label.innerText = this.state.value;
    }

    static get is(){
        return is;
    }

    get value(){
        return this.state.value;
    }
    set value(v){
        if(this.readOnly)
            return;
        this.state.value = v;
        this.render();
    }
}
window.customElements.define(is,Label);
export default Label;