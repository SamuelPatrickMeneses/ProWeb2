(function(){
    'use strict';
    function validaEmail(e){
        var v = e.target.value;
        if(v === '')
            e.target.setCustomValidity('Campo Obrigatorio.');
        else
            e.target.setCustomValidity('Email Invalido');
    }
    function validaSenha(e){
        var v = e.target.value;
        if(v === '')
            e.target.setCustomValidity('Campo Obrigatorio.');
        else
            e.target.setCustomValidity('Senha invalida.');
    }
    function validaSenha2(e){
        var v = e.target.value;
        if(v === '')
            e.target.setCustomValidity('Campo Obrigatorio.');
        else if(v !== document.forms.item('cadastro').sennha.value)
            e.target.setCustomValidity('As senhas não coincidem.');
    }
    function launcherLogin(event){
        if(event !== null)
            event.preventDefault();
        loadByName('assets/html/panel-login.html','page',loadLogin);
    }
    function launcherCadastro(event){
        if(event !== null)
            event.preventDefault();
        loadByName('assets/html/panel-cadastro.html','page',loadCadastro);
    }
    function loadLogin(){
        var f  = document.forms.item('cadastro');
        f.email.oninvalid = validaEmail;
        f.senha.oninvalid = validaSenha;
        f.email.onblur = validaEmail;
        f.senha.onblur = validaSenha;
        document.querySelector('.anoder-panel').addEventListener('click',launcherCadastro);
    }
    function loadCadastro(){
        var f  = document.forms.item('cadastro');
        f.email.oninvalid = validaEmail;
        f.senha.oninvalid = validaSenha;
        f.senha2.oninvalid = validaSenha2;
        f.email.onblur = validaEmail;
        f.senha.onblur = validaSenha;
        f.senha2.onblur = validaSenha2;
        document.querySelector('.anoder-panel').addEventListener('click', launcherLogin);
    }
    window.addEventListener('load',launcherLogin);

}());