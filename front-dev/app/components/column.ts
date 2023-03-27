import Component from './component.js';
import render from '../util/render.js';
import Item from './item.js';
import ItemListView from './itemListView.js';
import Label from './label.js';
import ColumnButton from './columnButton.js';
import ListView from './listView.js';

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
    private label    !: Label;
    private list     !: ItemListView;
    private addB     !: ColumnButton;
    private removeB  !: ColumnButton;
    private hideCB   !: boolean;
    private type     !: string;
    build(props : any){
        super.build(props,template);
        if(props.name){
            this.label = <Label>render(Label,{value:props.name,readOnly:true});
            this.sRoot.querySelector('.col-header')?.
            appendChild(this.label);
        }
        this.list = <ItemListView>render(ItemListView,props.list ? props.list : []);
        this.sRoot.querySelector('.col-content')?.
        appendChild(this.list);
        this.list.column = true;
        if(props.closable){
            this.addB = <ColumnButton>render(ColumnButton,{onclick:this.add.bind(this),text:'+'});
            this.removeB = <ColumnButton>render(ColumnButton,{onclick:this.remove.bind(this),text:'-'});
            this.sRoot.querySelector('.col-footer')?.appendChild(this.addB);
            this.sRoot.querySelector('.col-footer')?.appendChild(this.removeB);
        }
        this.stylize();
        this.type = props.type;
        this.hideCB = true;
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
        this.list.add(<Item>render(Item,{
            remove:this.list.remove.bind(this.list),
            name:name,
            value:'3',
            size:5,
            type:this.state.type
        }));
    }
    remove(){
        if(this.hideCB){
            this.showCloseButtons();
            this.hideCB = false;
        }else{
            this.hideCloseButtons();
            this.hideCB = true;
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
        let state: any = {};
        if(this.label)
            state.name = this.name;
        state.list = this.list.getState();
        state.closable = this.state.closable;
        state.type = this.type;
        return state;
    }
}
window.customElements.define(is,Column);
export default Column;