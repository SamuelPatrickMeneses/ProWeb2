import Comment from './component.js';
import Box from './box.js';
import render from '../util/render.js';
const is = 'wb-atb-life';
const template = $(`
    <template id="atb-life" class="min-w-1/4 grow-0">
        <div  class="atb flex h-full justify-center items-center py-3">
        </div>
    </template>
`);
class AtbLife extends Comment{
    constructor(){
        super();
    }
    build(props){
        super.build(props,template);
        this.container = this.shadowRoot.querySelector('div.atb');
        this.container.appendChild(render(Box,{value: props.value}));
        this.box = this.container.children[0];
        this.box.onclick  = function(){ 
            this.value = (this.value + 1) % 3;
        };
        this.stylize();
    }
    render(){
    }
    static get is(){
        return is;
    }
    get value(){
        return this.box.value | 0;
    }
    set value(value){
        this.box.value = Number(value);
    }
}
window.customElements.define(is,AtbLife);
export default AtbLife;