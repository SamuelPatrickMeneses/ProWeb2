import Component from './component.js';
import privado from '../util/privado.js';
import Item from './item.js';
const template = $(`
    <template id="list-view">
        <div class="w-full flex flex-col flex-wrap  lg:flex-row  justify-around
       sm:divide-y-0 divide-y divide-paleta-1 overflow-x-scroll gap-x-2
       bg-paleta-3">

        </div>
    </template>
`);
const is = 'wb-list-view';
const p = privado();
class ListView extends Component{
    build(props,subTemplate){
        super.build(props,subTemplate ? subTemplate : template);
        this.container = this.shadowRoot.querySelector('div');
        let procuração = p(this);
        procuração.items =  Array.prototype.isPrototypeOf(props) ? props : [];
        delete this.state;
        this.wrap = false;
        this.stylize();
    }
    render(){
        p(this).items.forEach((e) => 
            this.container.appendChild(e));
    }
    static get is(){
        return is;
    }
    get(index){
        return p(this).items[index]; 
    }
    add(item){
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
    get wrap(){
        return this.container.classList.contains('flex-wrap');
    }
    set wrap(v){
        if(v){
            if(!this.container.classList.contains('flex-wrap'))
                this.container.classList.add('flex-wrap');
        }else{
            if(this.container.classList.contains('flex-wrap'))
                this.container.classList.remove('flex-wrap');
        }
    }
    get items(){
        return p(this).items;
    }
    set items(v){
        p(this).items = v;
        this.render();
    }
}
window.customElements.define(is,ListView);
export default ListView;