var inputs = [];
function changeAt(event) {
    var src = event.currentTarget;
    var bc = src.parentNode;
    var bcs = [];
    bc.parentNode.querySelectorAll('.bc').forEach(function (e) { bcs.push(e); });
    var index = bcs.indexOf(bc);
    bcs.forEach(function (e, i) {
        if(i === index && i >= 1){
            console.log('i= '+i)
            if(bcs[i-1].querySelector('input').checked === true)
                e.querySelector('input').checked = true; 
        }
            
        if (i > index)
            e.querySelector('input').checked = true;
        else if (i < index)
            e.querySelector('input').checked = false;
    });     
    var at = bc.parentNode.parentNode;
    at.value = at.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(at.value)
}
window.addEventListener( 'load', function(){
    document.querySelectorAll(".bc input").forEach(function(e){inputs.push(e)});  
    inputs.forEach(function(e){
        e.onclick = changeAt;
    });
});