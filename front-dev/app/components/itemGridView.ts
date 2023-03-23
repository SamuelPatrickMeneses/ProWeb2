import Component from './component.js';
import Item from './item.js';
import render from '../util/render.js';
const template = $(`
    <template id="grid-view">
        <div class="header grid grid-flow-row grid-cols-1 
        sm:grid-cols-2 sm:last:col-span-2
        md:grid-cols-3 last:md:row-auto gap-2
        bg-paleta-3"></div>
    </template>
`);
const is = 'wb-grid-view';
class ItemGridView extends Component{
    private container !: HTMLDivElement;
    private itemList  !: any[] | Item[];
    public readonly type  = Item;
    build(props : any){
        super.build(props,template);
        this.container = <HTMLDivElement>this.sRoot.querySelector('div.header');
        let items = []; 
        for(let o of  Object.values(props))
            items.push(o);
        this.itemList = items;

        delete this.state;
        this.stylize();
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
            items[i].column = true;
            this.container.appendChild(items[i]);
        }
    }
    static get is(){
        return is;
    }
    get(index :number){
        return this.itemList[index]; 
    }
    add(item :Item){
        if(item instanceof this.type)
            this.itemList.push(item);
        this.render();
    }
    removeItem(item:Item){
        let index = this.itemList.indexOf(item);
        this.itemList.splice(index,1);
        this.render();
    }

    get column(){
        return this.container.classList.contains('flex-col');
    }
    set column(v){
        if(v){
            if(!this.container.classList.contains('flex-col'))
                this.container.classList.add('flex-col');
        }else{
            if(this.container.classList.contains('flex-col'))
                this.container.classList.remove('flex-col');
        }
    }
    convert(e :any){
        if(this.type.prototype.isPrototypeOf(e))
            return e;
        e.remove = (elemento: Item) => this.removeItem(elemento);
        return render(this.type,e);
    }
    get items(){
        return this.itemList;
    }
    set items(v){
        this.itemList = v;
        this.render();
    }
    getState(){
        let state :any = {};
        let items :Item[] = this.items;
        for(let i = 0; i < items.length;i++)
            state[items[i].name] = items[i].getState();
        return state;
    }
}
window.customElements.define(is,ItemGridView);
export default ItemGridView;