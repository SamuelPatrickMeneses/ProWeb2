function loadByName(url, indent, resize){
    'use strict';
    var encubadora = document.createElement('div');
    var request = new XMLHttpRequest();
    request.onload = function(){
        if(request.status === 200){
            encubadora.innerHTML = request.responseText;
            var elements = document.getElementsByName(indent);
            for(var e of elements)
                e.innerHTML = encubadora.firstChild.innerHTML;   
            if(typeof resize === 'function')
                resize();
        }
    };
    request.open('GET', url);
    request.send();
}
(function(){
    'use strict';
    window.onload = function(){
        var resizeFooter = function (){
            var bloc = document.getElementById('rodapé').getBoundingClientRect();
            document.getElementsByTagName('body')[0].style.paddingBottom = `${bloc.height}px`;
        };
        var resizeHeader = function (){
            var bloc  = document.getElementById('cabesalho').getBoundingClientRect();
            document.getElementsByTagName('body')[0].style.paddingTop = `${bloc.height}px`;
        };
        loadByName('assets/html/footer.html','footer',resizeFooter);
        loadByName('assets/html/header.html','header', resizeHeader);
        document.body.classList.toggle('paleta1');
        window.addEventListener('resize',resizeFooter);
        

    };
}());
