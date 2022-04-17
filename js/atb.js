function atValide(at){
    var bcs = atToArray(at);
     bcs.forEach( (e, i) => {
        e.querySelector('input').checked = i < at.value;
     });
 }
 function atToArray(at){
    var bcs = [];
    at.querySelectorAll('.bc').forEach(function (e){
         bcs.push(e); 
        });
    return bcs;
 }
(function(){
    function changeAt(event) {
        var src = event.currentTarget;
        var at = src.parentNode.parentNode.parentNode;
        var bcs = atToArray(at);
        var index = bcs.indexOf(src.parentNode);
        if(src.checked)
            at.value =  1 +  index ;
        else{
            if(index < (bcs.length -1)){
                var next = bcs[index + 1].childNodes[1];
                if(next.checked){
                    at.value = index + 1;
                }else
                at.value =   index

            }else
                at.value = index;
        }
        console.log('case!')
        atValide(at)
    } 
    window.addEventListener( 'load', function(){
        var inputs = [];
        document.querySelectorAll(".bc input").forEach(function(e){inputs.push(e)});  
        inputs.forEach(function(e){
            e.onclick = changeAt;
        });
    });    
}());