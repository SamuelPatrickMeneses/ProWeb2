import base64 from '../util/base64.js';
import lista from './lista.js';
import storageHash from '../util/storageHash.js';
function loginECadastro(){
    'use strict';
    
    var loadCadastro !: () => void;
    var loadLogin    !: () => void;
    function validaEmail(e : any){
        var v = e.target.value;
        e.target.setCustomValidity('');
        if(v === '')
            e.target.setCustomValidity('Campo Obrigatorio.');
        else if(!e.target.validity.valid)
            e.target.setCustomValidity('Email Invalido');
    }
    function validaSenha(e :any){
        var v = e.target.value;
        e.target.setCustomValidity('');
        if(v === '')
            e.target.setCustomValidity('Campo Obrigatorio.');
        else if(!e.target.validity.valid)
            e.target.setCustomValidity('Senha invalida.');
        
        
    }
    function validaSenha2(e :any){
        var v = e.target.value;
        e.target.setCustomValidity('');
        if(v === '')
            e.target.setCustomValidity('Campo Obrigatorio.');
        else if(v !== document.forms.item(1)?.senha.value)
            e.target.setCustomValidity('As senhas não coincidem.');
    }
    function launcherLogin(){
        $('#root').load('assets/html/panel-login.html',loadLogin);
    }
    function launcherCadastro(){
        $('#root').load('assets/html/panel-cadastro.html',loadCadastro);
    }
    loadLogin = function(){
        var f :any = document.forms.item(1);
        f.email.oninvalid = validaEmail;
        f.senha.oninvalid = validaSenha;
        $(f.email).blur(validaEmail);
        $(f.senha).blur(validaSenha);
        document.querySelector('.anoder-panel')?.addEventListener('click',launcherCadastro);
        $('form').submit((event)=> {
            event.preventDefault();
            let request = {
                email:$('#email').val(),
                senha:$('#senha').val()
            };
            let hash = base64.utf8_to_b64(`${request.email} ${request.senha}`);
            $.ajax('/api/ficha',{
                statusCode:{
                    200: (data) => {
                        storageHash(hash);
                        console.log(data);
                        lista(data);
                    }
                },
                error:(data) => 
                    console.log(`Ocoreu um erro! Usuario não cadastrado! ${data}`),
                headers:{
                    Authorization: hash
                }
            });
        });
    };
    loadCadastro = function(){
        var f :any = document.forms.item(1);
        f.email.oninvalid = validaEmail;
        f.senha.oninvalid = validaSenha;
        f.senha2.oninvalid = validaSenha2;
        $(f.email).blur(validaEmail);
        $(f.senha).blur(validaSenha);
        f.senha2.addEventListener('input',validaSenha2);
        document.querySelector('.anoder-panel')?.
        addEventListener('click', launcherLogin);
        $('form').submit((event)=>{
            
            event.preventDefault();
            let request = {
                email:$('#email').val(),
                senha:$('#senha').val()
            };
            $.ajax('/api/cadastro',{
                statusCode:{
                    422:() =>
                        console.log('Este email já esta cadastrado!',422),
                    201: (data) => {
                            sessionStorage.setItem('api/fichas',JSON.stringify(request));
                            console.log(data);
                                launcherLogin();
                                console.log('Usuario cadastrado!');
                        }
                },
                error: (err) => 
                    console.log(`Ocoreu um erro! talves Este email já esteja cadastrado. ${err}`),
                data: request,
                method: 'POST'
            });
        });
    };
    launcherLogin();
}
export default loginECadastro;