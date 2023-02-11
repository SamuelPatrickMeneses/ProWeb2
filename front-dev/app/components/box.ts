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
    static readonly XValue = 2;
    build(props: any){
        super.build(props,template);
        
        this.addEventListener('click', () => {
            this.state.value = (this.value + 1) % 3;
        });

        this.onclick = this.render;
        
        this.value = props.value | 0;
    }
    render(){
        switch(this.value){
            case 0:
                $('.bar',this.sRoot).css('display','none');
                break;
            case 1:
                $('.bar1',this.sRoot).css('display','block');
                $('.bar2',this.sRoot).css('display','none');
                break;
            case 2:
                $('.bar2',this.sRoot).css('display','block');
                $('.bar1',this.sRoot).css('display','block');
                break;
        }
    }
    set value(v: number){
        this.state.value = Number(v);
        this.render();
    }
    get value(): number{
        return this.state.value;
    }
    static get is(){
        return is;
    }
}

window.customElements.define(is,Box);
export default Box;