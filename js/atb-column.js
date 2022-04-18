(function(){
    function hideCloseButton(){
        var coms = this.parentNode.parentNode.querySelectorAll('.at5-close');
        console.log(coms);
        for(o of coms){
            o.classList.toggle('displaynone');   
        }      
    }
    function removeAt5(){
        var pn = this.parentNode.parentNode;
        pn.removeChild(this.parentNode)
    }
    window.addEventListener('load',function(){
        var btsp = [];
        document.querySelectorAll('.atb-column-mais').forEach(e => btsp.push(e));
        var btsm= [];
        document.querySelectorAll('.atb-column-menos').forEach(e => e.addEventListener('click', hideCloseButton));
        var btsq= [];
        document.querySelectorAll('.at5-close').forEach(e => e.addEventListener('click', removeAt5));

    });
}());