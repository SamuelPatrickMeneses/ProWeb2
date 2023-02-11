import Atb from './atb.js';
const is = 'wb-atb-limit';
class AtbLimit extends Atb{
    build(props: any): void {
        super.build(props); 
    }
    render(){
        super.render();
    }
    static get is(){
        return is;
    }
    get value(){
        return this.state.value | 0;
    }
    set value(value: number){
        this.state.value = Number(value);
        if(this.nextSibling instanceof Atb){
            let nextSibling = <Atb> this.nextSibling;
            if(nextSibling.value > super.value)
                nextSibling.value = super.value;
        }
        this.render();
    }
}
window.customElements.define(is,AtbLimit);
export default AtbLimit;