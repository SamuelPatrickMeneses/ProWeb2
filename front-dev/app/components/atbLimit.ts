import Atb from './atb.js';
const is = 'wb-atb-limit';
class AtbLimit extends Atb{
    static get is(){
        return is;
    }
    set value(value: number){
        this.state.value = Number(value);
        if(this.nextSibling instanceof Atb){
            let nextSibling = <Atb> this.nextSibling;
            if(nextSibling.value > this.value)
                nextSibling.value = this.value;
        }
        this.render();
    }
}
window.customElements.define(is,AtbLimit);
export default AtbLimit;