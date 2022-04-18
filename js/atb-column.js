(function(){
    function ()
    window.addEventListener('load',function(){
        var btsp = [];
        document.querySelectorAll('.atb-column+').forEach(e => btsp.push(e));
        var btsm= [];
        document.querySelectorAll('.atb-column-').forEach(e => btsm.push(e));
        btsp.forEach((e) => {
            e.parentNode.previousSibling.querySelectorAll('.at5-close')
        });
    })
}());