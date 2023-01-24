import Component from './component.js';
import render from '../util/render.js';
import ListView from './listView.js';
import Label from './label.js';
import Column from './column.js';
const template = $(`
    <template id="column" class="">
        <div class="flex flex-col items-stretch rounded-md divide-y-2 divide-paleta-1">
            <div class="col-header ">
            </div>
            <div class="col-content">
            </div>
        </div>
    </template>
`);
const is = 'wb-secion';
class Secion extends Component{
    build(props){
        super.build(props,template);
        if(props.name){
            this.label = render(Label,{value:props.name,readOnly:true});
            this.shadowRoot.querySelector('.col-header')
            .appendChild(this.label);
        }
        this.list = render(ListView,[]);
        this.shadowRoot.querySelector('.col-content')
        .appendChild(this.list);
        this.stylize();
        this.render();
    }
    render(){
    }
    convert(e){
        return this.type.prototype.isPrototypeOf(e) ? 
        e : render(this.type,e);
    }
    static get is(){
        return is;
    }
    get(index){
        this.get(index);
    }
    add(o){
        this.list.add(this.convert(o));
    }
    remove(){
    }
    get column(){
        return this.list.column;
    }
    set column(v){
        this.list.column = v;
    }
    get type(){
        return  Column;
    }
    set type(v){
      return (v !== null);
    }
    getState(){
        let state = {};
        let items = this.list.items;
        for(let i = 0; i < items.length;i++)
            state[items[i].name] = items[i].getState();
        return state;
    }
}
window.customElements.define(is,Secion);
export default Secion;