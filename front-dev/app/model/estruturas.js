'use strict';
var htmls = {};
window.addEventListener('load',()=>{
   htmls = JSON.parse(localStorage.getItem('htmls'));
});
class Component {
    constructor(o, url){
        var emcubadora = document.createElement('div');
        var privatecofig = {
            'configurable': true,
            'enumerable': true,
            'writable': false
        };
        if(o instanceof Element){
            privatecofig.value = o;
            Object.defineProperty(this,'_com',privatecofig);
        }
        else{
            emcubadora.innerHTML = htmls[url];
            privatecofig.value = emcubadora.getElementsByTagName('div')[0];
            Object.defineProperty(this,'_com',privatecofig);
            this.component.mirror = this;
        }
    }
    get component(){
        return  Object.getOwnPropertyDescriptor(this,'_com').value;
    }
    getPropert(name){
        return Object.getOwnPropertyDescriptor(this,name).value;
    }
    defineProperty(name, value){
        if(value !== '_com'){
            var privatecofig = {
                'configurable': true,
                'enumerable': false,
                'writable': false,
                'value': value
            };
            Object.defineProperty(this, name,privatecofig);
        }
    }
}
export {Component};