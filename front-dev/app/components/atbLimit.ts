import Component from './component.js';
import Bol from './bol.js';
import Box from './box.js';
import render from '../util/render.js';
const is = 'wb-atb-limit';
const template = $(`
    <template id="atb" class="min-w-1/2 grow">
        <div  class="atb flex flex-wrap h-full justify-around items-center py-3">
        </div>
    </template>
`);
class AtbLimit extends Component{
    constructor(){
        super();
    }
    build(props){
        super.build(props,template);
        this.list = [];
        for(let i = 0;i < this.props.size;i++)
            this.list.push(render(props.box ? Box : Bol,{'value':2}));
        this.atb = this.shadowRoot.querySelector('div.atb');
        this.list.forEach((e,i) => {
            this.atb.appendChild(e);
            e.parent = this;
            e.index = i;
            e.next = this.list[i+1];
        });
        this.wrap = false;
        this.stylize();
        this.state.value = props.value; 
        this.render();
    }
    render(){
        this.list.forEach((e,i) => {
            console.log(this.value)
            e.value = i < this.value ? 2: 0;
        });
    }
    static get is(){
        return is;
    }
    get value(){
        return this.state.value | 0;
    }
    set value(value){
        this.state.value = Number(value);
        let next = $(this).next()[0];
        if(next && next.value > this.state.value)
            next.value = this.state.value;
        this.render();
    }
    get size(){
        return this.state.size | 0;
    }
    set size(size){
        (size = undefined);
    }
    set wrap(v){
        let atb = $(this.atb);
        let className = 'flex-wrap';
        if(v)
            atb.addClass(className);
        else
            atb.removeClass(className);
    }
    get wrap(){
        return $(this.atb).hasClass('flex-wrap');
    }
}
window.customElements.define(is,AtbLimit);
export default AtbLimit;