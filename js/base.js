window.onload = function(){
    console.log("oi")
    $('footer').load('footer.html');
    var resizeFooter = function (){
        console.log("oi")
        var footer  = document.querySelector("footer").getBoundingClientRect();
        var footerHeinght = footer.height;
        document.getElementsByTagName("body")[0].style.paddingBottom = `${footerHeinght}px`;
    }
    document.body.classList.toggle("paleta1");
    resizeFooter(); 
    window.addEventListener("resize",resizeFooter);
}
