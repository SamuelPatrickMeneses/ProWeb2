import Component from './component.js';
import privado from '../util/privado.js';
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
const p = privado();
class ItemGridView extends Component{
    build(props){
        super.build(props,template);
        this.container = this.shadowRoot.querySelector('div.header');
        let procuração = p(this);
        let items = []; 
        for(let o of  Object.values(props))
            items.push(o);
        procuração.items = items;

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
    get(index){
        return p(this).items[index]; 
    }
    add(item){
        if(item instanceof this.type)
            p(this).items.push(item);
        this.render();
    }
    remove(item){
        let index = p(this).items.indexOf(item);
        p(this).items.splice(index,1);
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
    convert(e){
        if(this.type.prototype.isPrototypeOf(e))
            return e;
        e.remove = (elemento) => this.remove(elemento);
        return render(this.type,e);
    }
    get items(){
        return p(this).items;
    }
    set items(v){
        p(this).items = v;
        this.render();
    }
    get type(){
        return  Item;
    }
    set type(v){
      return (v !== null);
    }
    getState(){
        let state = {};
        let items = this.items;
        for(let i = 0; i < items.length;i++)
            state[items[i].name] = items[i].getState();
        return state;
    }
}
window.customElements.define(is,ItemGridView);
export default ItemGridView;