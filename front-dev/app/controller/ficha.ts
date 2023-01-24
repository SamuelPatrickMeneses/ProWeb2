import Ficha from '../components/ficha.js';
import storageHash from '../util/storageHash.js';
import lista from './lista.js';

export default function (ficha){
    'use strict';
    $('#cabesalho').load('assets/html/ficha-header.html',undefined,
    () => {
        $('div#dropdonw').slideUp(0);
        $('div.sanduiche').click(() => $('div#dropdonw').slideToggle());
        $('#salvar').click(() => {
            $.ajax('/api/ficha',{
                success: (data) => {
                    window.alert('salvo com susse sucesso!');
                    $('#ficha')[0].id = data.id;
                },
                headers:{
                    Authorization: storageHash()
                },
                method:'POST',
                data: JSON.stringify($('wb-ficha')[0].getState()),
                contentType: 'application/json',
                error: (err) => console.log(err.status)
            });
        });
        $('#fichas').click(() => {
            $.ajax('/api/ficha',{
                statusCode:{
                    200: (data) => {
                        console.log(data);
                        lista(data);
                    }
                },
                error:(data) => 
                    console.log(`Ocoreu um erro! Usuario não cadastrado! ${data}`),
                headers:{
                    Authorization: storageHash()
                }
            });
        });
    });

    let root = $('#root').html('')[0];
    root.render(Ficha,ficha);
    $('wb-ficha')[0].id = '#ficha';
    console.log(JSON.stringify($('wb-ficha')[0].getState()));
}