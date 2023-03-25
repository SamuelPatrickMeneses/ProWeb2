import loginECadastro from './controller/login-e-cadastro.js';

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
    loginECadastro();
};
export default {};
