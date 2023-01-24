import Atb from './components/atb.js';
import render from './util/render.js';
//import Label from './components/label.js';
//import CloseButton from './components/closerButton.js';
//import Item from './components/item.js';
//import ItemListView from './components/itemListView.js';
//import Column from './components/column.js';
//import login  from './controller/login-e-cadastro.js';

//import LifeBox from './components/box.js';
//import ItemGridView from './components/itemGridView.js';
//import Ficha from './components/ficha.js';
//import ListItem from './components/listItem.js';
//import lista from './controller/lista.js';
//import Component from './components/component.js';
import Bol from './components/bol.js';
// import html from '../index.html';
//import style from '../assets/css/dev.css';
window.onload = () => {
    'use strict';
    let root  = <HTMLElement> document.getElementById('root');
    /*if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('mySW.js')
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
    //window.document.getElementById('root').appendChild(render(Component,{value:false}));
    //let bol = render(Bol,{value:false});
    //window.document.getElementById('root').appendChild(bol);
    
    //window.document.getElementById('root').appendChild(render(Label,{value:'oi',size:5}));
    //let b = render(CloseButton,{callback:() => alert(oi)});
    //window.document.getElementById('root').appendChild(b);
    //b.show(); 

    /*let item = render(Item,{
        callBack:() => window.alert("oi"),
        name:'nome',
        value:'3',
        size:5,
        type:'atb'  
    });*/
    /*root.render(Column,{
        name:'Talentos',
        closable:true,
        list:{
            items:[
                {
                    value:'3',
                    size:10,
                    type:'atb-box'
                },
                {
                    name:'nome',
                    value:'3',
                    size:5,
                    type:'atb'
                },
                {
                
                    name:'nome',
                    value:'3',
                    size:5, 
                    type:'text'
                }
            ]
    }});*/
    //root.firstChild.column = false;
    //root.innerHTML = `<wb-label argvalue="oi" />`; 
    $('#cabesalho').load('assets/html/forein-header.html');

    /*$.ajax({
        url:'/mok.json',
        success:function(data){
            root.render(Ficha,data);
        }
    });*/
    //root.render(ListItem,{name:'Samuel',data:Date.now(),'clã':'bruja',id:'sads3fa',
    //callback:(event) => alert(event.target.id)});
    //login();
    //root.render(Item,{value:1, name:'life', type:'atb', limit:3, size:10});
    /*root?.appendChild(render(ItemGridView,{
        items:[
        {
            value:'3',
            size:5,
            type:'atb-box'
        },
        {
            name:'nome',
            value:'3',
            size:5,
            type:'atb-box'
        },
        {
        
            name:'nome',
            value:'3',
            size:5, 
            type:'text'
        },
        {
            name:'nome',
            value:'3',
            size:5,
            type:'atb'
        },
        {
        
            name:'nome',
            value:'3',
            size:5, 
            type:'text'
        },
        {
            name:'nome',
            value:'3',
            size:5,
            type:'atb'
        },
        {
        
            name:'nome',
            value:'3',
            size:5, 
            type:'text'
        },
        {
            name:'nome',
            value:'3',
            size:5,
            type:'atb'
        },
        {
        
            name:'nome',
            value:'3',
            size:5, 
            type:'text'
        },
    ]}    ));*/
    //login();
    const bol  = render(Atb,{value:3,size:5});
    const box  = render(Atb,{value:3,size:5,box:true});
    root.appendChild(bol);
    root.appendChild(box);
};
export default {};
