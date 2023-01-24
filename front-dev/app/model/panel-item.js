import { Component } from './estruturas.js';
class Item extends Component{
    constructor(o){
        super(o,'assets/html/panel-item.html');
        let jqo = $(this.component);
        $('.logo-type img',jqo).attr('src',o.imgURL);
        $('.panel-item-name',jqo).text(`nome: ${o.name}`);
        $('.panel-item-createdata',jqo).text(`data: ${o.createDate}`);
    }
}
export {Item};