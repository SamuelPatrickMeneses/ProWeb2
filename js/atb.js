
document.onload = function(){
    document.querySelectorAll(".bc input").forEach(function(e,i,a){
        console.log('oi1')
        e.addEventListener("change",function(event){
            console.log('oi')
            var src = event.currentTarget;
            var bc = src.parentNode;
            var bcs = bc.parentNode.querySelectorAll('.bc');
            var index = bcs.indexOf(bc);
            bcs.forEach(function(e,i,a){
                if(i < index)
                    e.querySelector('input').checked = true;
                else if(i > index)
                    e.querySelector('input').checked = false;
            });
            bc.parentNode.parentNode.value = (index + 1) + ""
        })
    });

}