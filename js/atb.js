function atValide(at){
    var bcs = atToArray(at);
     bcs.forEach( (e, i) => {
        e.checked = i < at.value;
     });
 }
 function atToArray(at){
    var bcs = [];
    at.querySelectorAll('input[type="checkbox"]').forEach(function (e){
         bcs.push(e); 
        });
    return bcs;
 }
(function(){
    function changeAt(event) {
        var at = this.parentNode.parentNode.parentNode;
        var bcs = atToArray(at);
        var index = bcs.indexOf(this);
        if(this.checked)
            at.value =  1 +  index ;
        else{
            if(index < (bcs.length -1)){
                var next = bcs[index + 1];
                if(next.checked){
                    at.value = index + 1;
                }else
                at.value =   index

            }else
                at.value = index;
        }
        console.log(event.clientX, event.clientY)
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