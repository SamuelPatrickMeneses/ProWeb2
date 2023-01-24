import {findJSON} from '../util/ajax.js';
import {Item} from '../model/panel-item.js';
(function(){
    'use strict';
    function loadJSOM(data){
        let list = JSON.parse(data);
        let items = list.map((e)=>{
            return new Item(e);
        });
        let content = document.querySelector('.page');
        items.forEach(element => content.appendChild(element));
    }
    let userData = JSON.parse(sessionStorage.getItem('user'));
    findJSON('/panel',JSON.stringify(userData),loadJSOM);
}());