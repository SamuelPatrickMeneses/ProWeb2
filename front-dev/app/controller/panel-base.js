import {findJSON} from '../util/ajax.js';
(function(){
    'use strict';

    findJSON('/panel',JSON.stringify(user),
    (data) => {
        if(data === true){
        sessionStorage.setItem('user',JSON.stringify({
            email:$('#email').val(),
            senha:$('senha').val()
        }));
        window.open('/panel.html');
    }else{
        console.log('Usuario não cadastrado!');
    }
    },
    (data) => window.alert(`Ocoreu um erro! Usuario não cadastrado! ${data}`));

}());