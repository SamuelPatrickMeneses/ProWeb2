import Component from './component.js';
import render from '../util/render.js';
import Item from './item.js';
import ItemListView from './itemListView.js';
import Label from './label.js';
import ColumnButton from './columnButton.js';
import privado from '../util/privado.js';
const p = privado();
const template = $(`
    <template id="column" class="grow">
        <div class="flex flex-col items-stretch bg-paleta-5 rounded-md divide-y-2 divide-paleta-1">
            <div class="col-header ">
            </div>
            <div class="col-content">
            </div>
            <div class="col-footer flex items-center justify-around py-2 ">
            </div>
        </div>
    </template>
`);
const is = 'wb-column';
class Column extends Component{
    build(props){
        super.build(props,template);
        if(props.name){
            this.label = render(Label,{value:props.name,readOnly:true});
            this.shadowRoot.querySelector('.col-header')
            .appendChild(this.label);
        }
        this.list = render(ItemListView,props.list ? props.list : []);
        this.shadowRoot.querySelector('.col-content')
        .appendChild(this.list);
        this.list.column = true;
        if(props.closable){
            this.addB = render(ColumnButton,{callBack:this.add.bind(this),text:'+'});
            this.removeB = render(ColumnButton,{callBack:this.remove.bind(this),text:'-'});
            this.shadowRoot.querySelector('.col-footer').appendChild(this.addB);
            this.shadowRoot.querySelector('.col-footer').appendChild(this.removeB);
        }
        this.stylize();
        p(this).type = props.type;
        p(this).hideCB = true;
        this.render();
    }
    render(){

    }
    static get is(){
        return is;
    }
    get(){
    }
    add(){
        let name = window.prompt('digite o nomedo novo item!');
        name = name ? name : ' ';
        this.list.add(render(Item,{
            remove:this.list.remove.bind(this.list),
            name:name,
            value:'3',
            size:5,
            type:this.state.type
        }));
    }
    remove(){
        let proxy = p(this);
        if(proxy.hideCB){
            this.showCloseButtons();
            proxy.hideCB = false;
        }else{
            this.hideCloseButtons();
            proxy.hideCB = true;
        }
    }
    showCloseButtons(){
        this.list.showCloseButtons();
    }
    hideCloseButtons(){
        this.list.hideCloseButtons();
    }
    get column(){
        return this.list.column;
    }
    set column(v){
        this.list.column = v;
    }
    get name(){
        if(this.label)
            return this.label.value;
    }
    set name(v){
        if(this.label){
            this.state.name = v;
            this.label.value = v;
        }

    }
    getState(){
        let state = {};
        if(this.label)
            state.name = this.name;
        state.list = this.list.getState();
        state.closable = this.state.closable;
        state.type = p(this).type;
        return state;
    }
}
window.customElements.define(is,Column);
export default Column;