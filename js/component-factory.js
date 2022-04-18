var htmls = {};
function comFactory(url){
    var emcubadora = document.createElement('div');
    if(htmls[url] === undefined){
        var request = new XMLHttpRequest();
        request.onload = function(){
            if(this.status = 200){
                emcubadora.innerHTML = request.responseText;
            }
        }
        request.open('GET',url);
        request.send();
    }else{
        emcubadora.innerHTML = htmls[url];
    }
    return emcubadora.firstChild;
}
function comat5Facyory(o){
    var com = comFactory('/ProWeb2/at5.html');
    com.value = o.value;
    com.firstChild.innerText = o.name;
    atValide(com);
    return com;
}
function comatb_columnFactory(o){
    var com = comFactory('/ProWeb2/atb-column.html');
    com.getElementsByTagName('h4')[0].innerText = o.name;
    var conteudo = com.querySelector('.atb-column-content');
    for(o of o.content)
        conteudo.appendChild(comat5Facyory(o));
    return com;
}