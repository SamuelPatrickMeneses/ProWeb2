import Component from "../components/component.js";
namespace Render{  
   export function render(type : string | any, props: object):HTMLElement{
        'use strict';
        const name = (typeof type === 'string')? type : type.is;
        const element : HTMLElement = document.createElement(name);
        if(element instanceof  Component){
            const component: Component = <Component> element;
            component.build(props);
        }
        return element;
    };
}
/*let root = document.getElementsByName('root')[0];
root.render = function(comp,prop){
    'use strict';
    this.appendChild(render(comp,prop));
};*/ 
export default Render.render;
