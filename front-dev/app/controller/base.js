import {loadByName} from '../util/ajax.js';
(function(){
    'use strict';
    window.onload = function(){
        var resizeFooter = function (){
            var bloc = document.getElementById('rodapé').getBoundingClientRect();
            document.getElementsByTagName('body')[0].style.paddingBottom = `${bloc.height+24}px`;
        };
        var resizeHeader = function (){
            var bloc  = document.getElementById('cabesalho').getBoundingClientRect();
            document.getElementsByTagName('body')[0].style.paddingTop = `${bloc.height+24}px`;
        };
        loadByName('assets/html/footer.html','footer',resizeFooter);
        loadByName('assets/html/header.html','header', resizeHeader);
        document.body.classList.toggle('paleta1');
        window.addEventListener('resize',resizeFooter);     

    };
}());
