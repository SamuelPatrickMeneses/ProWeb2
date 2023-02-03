import Component from './component.js';
import Bol from './bol.js';
import Box from './box.js';
import render from '../util/render.js';
const is = 'wb-atb';
const template = $(`
    <template id="atb" class="min-w-1/2 grow">
        <div  class="atb flex flex-wrap h-full justify-around items-center py-3">
        </div>
    </template>
`);
const emptyJQueryObject = $('');
class Atb extends Component{
    protected list      : Bol[]  = [];
    protected content   : JQuery = emptyJQueryObject;
    public    size      : number = 0;
    constructor(){
        super();
    }
    build(props: any){
        super.build(props,template);

        for(let i = 0;i < this.props.size;i++){
            let newBol = <Bol> render(props.box ? Box : Bol, {valu:2});
            this.list.push(newBol);
        }
        this.content = $('div.atb',this.sRoot);
        
        this.list.forEach((e,i) => {
            this.content[0].appendChild(e);
            e.index = i;

            e.onclick = ({target}) => { 
                let clickedBol = <Bol> target;
                let newValue = clickedBol.index;
                let nextBol = <Bol> clickedBol.nextSibling;

                if(clickedBol.value)
                    newValue++;
                else 
                    if(nextBol && nextBol.value)
                        newValue++;

                this.value = newValue;        
            };

        });
        this.wrap = false;
        this.stylize();
        this.render(); 
    }
    render(){
        this?.list?.forEach((e,i) => 
            e.value = i < this.value ? Box.XValue   : 0
        );
    }
    static get is(){
        return is;
    }
    get value(){
        return this.state.value | 0;
    }
    set value(value: number){
        let previousSibling = <Atb> this.previousSibling;
        if(previousSibling instanceof Atb){
            let limit = previousSibling.value;
            this.state.value = Math.min(limit, value);
        }else
            this.state.value = value;
        this.render();
    }
    set wrap(v){
        let wrapClassName = 'flex-wrap';
        if(v)
            this.content.addClass(wrapClassName);
        else
            this.content.removeClass(wrapClassName);
    }
    get wrap(){
        return this.content.hasClass('flex-wrap');
    }
}
window.customElements.define(is,Atb);
export default Atb;