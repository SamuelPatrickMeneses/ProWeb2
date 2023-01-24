export default function(){
    'use strict';
    const index = [];
    const props = [];
    function find(self){
        let i = index.indexOf(self);
        return props[i];
    }
    function remove(obj){
        let i = find(obj);
        delete index[i];
        delete props[i];
    }
    function add(obj){
        index.push(obj);
        let i = index.indexOf(obj);
        props[i] = {};
    }
    function proxyFactory(self){
        if(index.indexOf(self) === -1)
            add(self);
        return new Proxy(self,{
            get:function(obj,prop){
                return find(obj)[prop];
            },
            set:function(obj,prop,value){
                find(obj)[prop] = value;
                return this;
            }
        });
    }
    proxyFactory.remove = remove;
    return proxyFactory;
}