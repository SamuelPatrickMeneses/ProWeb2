import Atb from './atb.js';
import Label from './label.js';
import ColseButton from './closerButton.js';
import Component from './component.js';
import render from '../util/render.js';
import privado from '../util/privado.js';
import atbLife from './atbLife.js';
import atbLimit from './atbLimit.js';
const is = 'wb-item';
const template = $(`
    <template id="item">
        <div class="item bg-paleta-5 relative flex pr-2 sm:justify-between sm:flex-row flex-col">
        </div>
    </template>
`); 
const p = privado();
class Item extends Component{
    build(props){
        super.build(props,template);
        this.remove = this.props.remove;     
        this.container =  this.shadowRoot.querySelector('div');
        if(this.state.name){
            let lab = render(Label,{value:this.state.name});
            this.container.appendChild(lab);
            this.label = lab;
        } 
        if(!isNaN(this.state.limit)){
            this.atbLimit = render(atbLimit,{
                value:this.state.limmit,
                 size:this.state.size,
                 box:true});
            this.container.appendChild(this.atbLimit);
            $(this.container).removeClass('sm:flex-row');
        }
        switch(this.state.type){
            case 'atb':
                this.atb = render(Atb,{value:this.state.value, size:this.state.size}); 
                this.container.appendChild(this.atb);
                break;
            case 'atb-box':
                this.atb = render(Atb,{value:this.state.value, size:this.state.size,box:true}); 
                this.container.appendChild(this.atb);
                break;
            case 'text':
                this.text = render(Label,{value:this.state.value, size:this.state.size});
                this.container.appendChild(this.text);
                break; 
            case 'life-box':
                this.lifebox = render(atbLife,{value:props.value});
                this.container.appendChild(this.lifebox);
                break;
        }
        this.close = render(ColseButton,{callBack:this.delete.bind(this)});
        this.container.appendChild(this.close);
        this.stylize();
    }
    render(){
        if(this.label)
            this.label.value = this.state.name;
        if(this.atbLimmit)
            this.atbLimit.value = this.state.limmit;
        switch(this.state.type){
            case 'atb', 'atb-box':
                this.atb.value = this.state.value;
                this.atb.size = this.state.size;
                break;
            case 'text':
                this.text.value = this.state.value;
                break;
            case 'life-box':
                this.lifebox.value = this.state.value;
        }
    }
    delete(){
        p(this).remove(this);
    }
    showCloseButton(){
        this.close.show();
    }
    hideCloseButton(){
        this.close.hide();
    }
    static get is(){
        return is;
    }
    get value(){
        switch(this.state.type){
            case 'life-box':
                return this.lifebox.value;
            case 'text':
                return this.text.value;
            default:
                return this.atb.value;
        }
    }
    set value(v){
        switch(this.state.type){
            case 'life-box':
                this.state.value = v;
                this.lifebox.value = v;
                break;
            case 'text':
                this.state.value = v;
                this.text.value = v;
                break;
            default:
                this.state.value = v;
                this.atb.value = v;
        }
    }
    set name(n){
        if(this.label){
            this.state.name = n;
            this.label.value = n;
        }
    }
    get name(){
        if(this.label)
            return this.label.value;
    }
    get column(){
        return $(this.container).hasClass('flex-col');
    }
    set column(v){
        if(v)
                $(this.container).css('flex-direction','column');
        else
                $(this.container).css('flex-direction','row');
    }
    get type(){
        return this.state.type;
    }
    set type(v){
        return (v = undefined);
    }
    get size(){
        return this.state.size;
    }
    set size(size){
        return (size = undefined); 
    }
    get limit(){
        if(this.atbLimit)
            return this.atbLimit.value;
    }

    set limit(v){
        if(this.atbLimit){
            this.state.limit = v;
            this.atbLimit.value = v;
        }
    }
    getState(){
        let state = {};
        if(this.atbLimit)
            state.limit = this.limit;
        if(this.name)
            state.name = this.name;
        state.value = this.value;
        state.type = this.type;
        if(this.state.size)
            state.size = this.size;
        return state;   
        
    }
    get remove(){}
    set remove(remove){
        p(this).remove = remove; 
    }
}
window.customElements.define(is,Item);
export default Item;