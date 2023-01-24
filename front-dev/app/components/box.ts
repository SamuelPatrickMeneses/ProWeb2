import Bol from './bol.js';
const is = 'wb-box';
const template = $(`
    <template id="box" class="h-8 w-8">
        <div class="-full h-full rounded-sm relative ring-2 ring-gray-300 ">

            <div class="bar bar1 transition-all bg-gray-300 absolute h-1/5 w-full top-1/2
             bottom-1/2 left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45">
             </div>

            <div class="bar bar2 transition-all bg-gray-300 absolute h-1/5 w-full
             top-1/2 bottom-1/2 left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2
            -rotate-45">
            </div>
        </div>
    </template>
`);
class Box extends Bol{
    
    build(props: any){
        super.build(props,template);
        
        this.addEventListener('click',() => {
            this.state.value = (this.value + 1) % 3;
        });
        
        this.value = props.value | 0;
    }
    render(){
        const shadowRoot = <ShadowRoot> this.shadowRoot;
        switch(this.value){
            case 0:
                $('.bar',shadowRoot).css('display','none');
                break;
            case 1:
                $('.bar1',shadowRoot).css('display','block');
                $('.bar2',shadowRoot).css('display','none');
                break;
            case 2:
                $('.bar2',shadowRoot).css('display','block');
                $('.bar1',shadowRoot).css('display','block');
                break;
        }
    }
    set value(v){
        this.state.value = Number(v);
        this.render();
    }
    get value(){
        return this.state.value;
    }
    static get is(){
        return is;
    }
}

window.customElements.define(is,Box);
export default Box;