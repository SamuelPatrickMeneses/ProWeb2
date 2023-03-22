import Component from './component.js';
import render from '../util/render.js';
import ListView from './listView.js';
import Label from './label.js';
import ItemGridView from './itemGridView.js';
import Column from './column.js';
import Secion from './secion.js';
const template = $(`
    <template id="column" class="">
        <div class="bg-paleta-3 divide-paleta-1
        flex flex-col gap-4 items-stretch  rounded-md
        divide-y-2 ">
            
        </div>
    </template>
`);
const is = 'wb-ficha';
class Ficha extends Component{
    private container   !: HTMLDivElement;
    private head        !: ItemGridView;
    private atributos   !: Secion;
    private habilidades !: Secion;
    private vantagens   !: Secion;
    private outros      !: Secion;
    build(props :any){
        super.build(props,template);
        this.container = <HTMLDivElement>this.sRoot.querySelector('div');
        this.head = <ItemGridView>render(ItemGridView, props.head);
        this.container.appendChild(this.head);
        this.id = props.id;
        this.atributos = <Secion>render(Secion,{name: props.atributos.name});
        this.container.appendChild(this.atributos);
        this.atributos.add(<Column>render(Column,props.atributos['físicos']));
        this.atributos.add(<Column>render(Column,props.atributos.sociais));
        this.atributos.add(<Column>render(Column,props.atributos.mentais));

        this.habilidades = <Secion>render(Secion,{name: props.habilidades.name});
        this.habilidades.add(<Column>render(Column,props.habilidades.talentos));
        this.habilidades.add(<Column>render(Column,props.habilidades['perícias']));
        this.habilidades.add(<Column>render(Column,props.habilidades.conhecimentos));
        this.container.appendChild(this.habilidades);

        this.vantagens = <Secion>render(Secion,{name: props.vantagens.name});
        this.vantagens.add(<Column>render(Column,props.vantagens.disciplinas));
        this.vantagens.add(<Column>render(Column,props.vantagens.antecedentes));
        this.vantagens.add(<Column>render(Column,props.vantagens.virtudes));
        this.container.appendChild(this.vantagens);

        this.outros = <Secion>render(Secion,{name: props.outros.name});
        
        this.outros.add(<Column>render(Column,props.outros.desvantagens));
        this.outros.add(<Column>render(Column,props.outros.estatus));
        this.outros.add(<Column>render(Column,props.outros.vitalidade));
        this.container.appendChild(this.outros);
        console.log(this.getState());
        
    }
    render(){
        
    }
    static get is(){
        return is;
    }
    getState(){
        let state :any = {};
        state.head = this.head.getState();
        if(this.id)
            state.id = this.id;
        state.atributos = this.atributos.getState();
        state.habilidades = this.habilidades.getState();
        state.vantagens = this.vantagens.getState();
        state.outros = this.outros.getState();
        return state;
    }
}
window.customElements.define(is,Ficha);
export default Ficha;