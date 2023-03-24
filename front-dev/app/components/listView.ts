import Component from './component.js';
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
class ListView extends Component{
    public container !: HTMLDivElement;
    public items : any[] = [];

    build(props: any,subTemplate : JQuery){
        super.build(props,subTemplate ? subTemplate : template);
        this.container = <HTMLDivElement> this.sRoot.querySelector('div');
        this.items =  Array.prototype.isPrototypeOf(props) ? props : [];
        delete this.state;
        this.wrap = false;
        this.stylize();
    }
    render(){
        this.items.forEach((e) => 
            this.container.appendChild(e));
    }
    static get is(){
        return is;
    }
    get(index: number){
        return this.items[index]; 
    }
    add(item: Item){
        this.items.push(item);
        this.render();
    }
    removeItem(item : Item){
        let index = this.items.indexOf(item);
        this.items.splice(index,1);
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

}
window.customElements.define(is, ListView);
export default ListView;