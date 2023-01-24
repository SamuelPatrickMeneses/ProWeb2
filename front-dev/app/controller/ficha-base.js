import {Ficha} from '../model/table-components.js';
import {AssetLoader} from '../util/ajax.js';
(function(){
    'use strict';
    window.addEventListener('load',() =>{
        let f = {};
        new AssetLoader(f).put('assets/json/ficha.json').start(()=>{
            f = JSON.parse(f['assets/json/ficha.json']);
            new Ficha(f);
        });
        
    });
}());
