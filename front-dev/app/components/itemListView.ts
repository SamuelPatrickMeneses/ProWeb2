import render from '../util/render.js';
import Item from './item.js';
import ListView from './listView.js';
const template = $(`
    <template id="list-view">
        <div class="flex flex-col flex-wrap  divide-paleta-1 overflow-x-scroll">

        </div>
    </template>
`);
const is = 'wb-item-list-view';
class ItemListView extends ListView{
    build(props){
        super.build(props,template);
        this.render();
    }
    render(){
        let items = this.items;
        /*this.container.querySelectorAll('wb-item').forEach(
            (elemento) => {
                if(items.indexOf(elemento) < 0)
                    this.container.removeChild(elemento);
            }
        );*/
        this.container.innerHTML = '';
        for(let i in items){
            items[i] = this.convert(items[i]);
            this.container.appendChild(items[i]);
        }
    }
    convert(e){
        if(this.type.prototype.isPrototypeOf(e))
            return e;
        e.remove = (elemento) => this.remove(elemento);
        return render(this.type,e);
    }
    static get is(){
        return is;
    }
    showCloseButtons(){
        this.items.forEach((e) => e.showCloseButton());
    }
    hideCloseButtons(){
        this.items.forEach((e) => e.hideCloseButton());
    }
    get type(){
        return  Item;
    }
    set type(v){
      return (v !== null);
    }
    getState(){
        return this.items.map((e) => e.getState());
    }
}
window.customElements.define(is,ItemListView);
export default ItemListView;