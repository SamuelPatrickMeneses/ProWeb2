function loadFooter(){
    var encubadora = document.createElement('div');
    var request = new XMLHttpRequest();
    console.log(request.status)
    request.onload = function(){
        if(request.status == 200){
            encubadora.innerHTML = request.responseText;
            var footers = document.getElementsByClassName('footer')[0];
            footers.innerHTML = encubadora.firstChild.innerHTML;    
        }
    }
    request.open('GET','/ProWeb2/footer.html');
    request.send();
}
window.onload = function(){
    loadFooter();
    var resizeFooter = function (){
        var footer  = document.querySelector("footer").getBoundingClientRect();
        var footerHeinght = footer.height;
        document.getElementsByTagName("body")[0].style.paddingBottom = `${footerHeinght}px`;
    }
    document.body.classList.toggle("paleta1");
    resizeFooter(); 
    window.addEventListener("resize",resizeFooter);
}
