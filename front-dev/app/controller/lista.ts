import ListItem from '../components/listItem.js';
import ficha from './ficha.js';
import storageHash from '../util/storageHash.js';
import render from '../util/render.js';
import ColumnButton from '../components/columnButton.js';
export default function lista(list :any[]){
    'use strict';
    console.log(list)
    $('#cabesalho').load('assets/html/user-header.html',
    () => {
        $('div#dropdonw').slideUp(0);
        $('div.sanduiche').click(() => $('div#dropdonw').slideToggle());
        const button = render(ColumnButton,{text:'nova ficha'});
        
        button.id = 'novaFichab';
        root.appendChild(button);
        console.log(button)
        $('#novaFichab').on('click',() => {
            $.ajax('/mok.json',{
                success: (mok) => {
                    ficha(mok);
                }
            });
        });
        $('#lista').click(() => {
            $.ajax('/mok.json',{
                success: (mok) => {
                    ficha(mok);
                }
            });
        });
    });

    let root = $('#root').html('')[0];
    list.forEach((e) => {
        root.appendChild(render(ListItem,e));
    });
    $('wb-list-item').click((event) => {
        let id = encodeURI(event.target.id);
        
        console.log(id);
        $.ajax(`/api/ficha/${id}`,{
            success: (data) => ficha(data),
            headers:{
                Authorization: storageHash()
            }
        });
    });
}