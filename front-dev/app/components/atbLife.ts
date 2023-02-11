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
    private container !: HTMLDivElement;
    private box       !: Box;
    constructor(){
        super();
    }
    build(props: any){
        super.build(props,template);
        this.container = <HTMLDivElement> this.sRoot.querySelector('div.atb');
        this.box =  <Box> render(Box,{value: props.value});
        this.container.appendChild(this.box);
        this.box.onclick  = ({target}) => { 
            let box = <Box> target;
            box.value = (box.value + 1) % 3;
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