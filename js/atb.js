function atValide(at){
    var bcs = atToArray(at);
     bcs.forEach( (e, i) => {
         e.querySelector('input').checked = i < at.value;
     });
 }
 function atToArray(at){
    var bcs = [];
    at.querySelectorAll('.bc').forEach(function (e) { bcs.push(e); });
    return bcs;
 }
(function(){
    function changeAt(event) {
        var src = event.currentTarget;
        var at = src.parentNode.parentNode.parentNode;
        var bcs = atToArray(at);
        var index = bcs.indexOf(src.parentNode);
        if(src.checked)
            at.value = index + 1;
        else
            if(index > 0){
                if(bcs.length - 1 > index){
                    console.log('case!')
                    if(bcs[index+1].checked){
                        src.checked = true;
                        at.value = index + 1;
                    }else
                        at.value = index;  
                }
                                   
            }else
                at.value = 0;
    } 
    window.addEventListener( 'load', function(){
        var inputs = [];
        document.querySelectorAll(".bc input").forEach(function(e){inputs.push(e)});  
        inputs.forEach(function(e){
            e.onclick = changeAt;
        });
    });    
}());