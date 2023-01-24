import Component from './component.js';
const is = 'wb-close-button';
const template = $(`
    <template id="close-button" class="hidden absolute right-1 top-1">
        <div class="cb sm:w-4 sm:h-4 w-8 h-8 rounded-full relative active:ring-2
        active:ring-paleta-1 bg-paleta-1 active:bg-paleta-5 son:bg-paleta-5
         son:active:bg-paleta-1 ">
            <div class="absolute h-1/5 w-4/5 top-1/2 bottom-1/2 left-1/2 right-1/2 
            -translate-y-1/2 -translate-x-1/2 rotate-45"></div>

            <div class="absolute h-1/5 w-4/5 top-1/2 bottom-1/2 left-1/2 right-1/2 
            -translate-y-1/2 -translate-x-1/2  -rotate-45"></div>
        </div>
    </template>
`);
class ColseButton extends Component{
    build(props){
        super.build(props,template);
        this.button = this.shadowRoot.querySelector('.cb');
        this.onclick = this.props.callBack;
        this.stylize();
    }
    show(){
        if(this.classList.contains('hidden'))
            this.classList.remove('hidden');//?
    }
    hide(){
        if(!this.classList.contains('hidden')){
            this.classList.add('hidden');//?
        }
    }
    get callBack(){}
    set callBack(callBack){
        this.onclick = callBack; 
    }
    static get is(){
        return is;
    }
}

window.customElements.define(is,ColseButton);
export default ColseButton;