import Component from './component.js';
const is = 'wb-list-item';
const template = $(`
    <template id="item">
        <div class="grid grid-flow-row grid-cols-2 grid-rows-2 gap-2 p-4
      bg-paleta-5 text-paleta-2   rounded-sm ring-2 ring-paleta-2">
            <h3  class="col-span-2"></h3>
            <p class=""></p> <p class=""></p>
        </div>
    </template>
`); 
class ListItem extends Component{
    build(props :any){
        super.build(props,template);
        console.log(props)
        this.onclick = this.props.callback; 
        this.id = props.id;    
        let data = new Date(parseInt(props.data));
        console.log(data)
        $('h3',this.sRoot)
        .text(props.name)
        .next().text(`Clã: ${props['clã']}`)
        .next().text(`Data de criação: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`);
        this.stylize();
    }
    render(){
    }

    static get is(){
        return is;
    }
}
window.customElements.define(is,ListItem);
export default ListItem;