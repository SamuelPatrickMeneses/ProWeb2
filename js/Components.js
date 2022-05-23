
class Component {
    #com
    constructor(o, url){
        var emcubadora = document.createElement('div');
        if(o instanceof Element){
            this.#com = o;
        }
        else{
            if(htmls[url] === undefined){
                var request = new XMLHttpRequest();
                request.onload = (event) =>{
                    if(event.target.status = 200){
                        htmls[url] = event.target.responseText;
                        emcubadora.innerHTML = event.target.responseText;
                        this.#com = emcubadora.firstChild;
                    }
                }
                request.open('GET',url);
                request.send();
            }else{
                emcubadora.innerHTML = htmls[url];
                this.#com = emcubadora.firstChild;
            }
            this.#com.mirror = this;
        }
    }
    get component(){
        return this.#com;
    }
}
class AtbImput extends Component{
    #value
    #name
    constructor(o, url){
        super(o, url);
        console.log(o)
        if(o instanceof Element){
            this.#value = o.value;
            this.#name = o.getElementsByTagName('p')[0].innerText;
        }else{
            this.#value = o.value;
            this.#name = o.name;
            this.component.value = o.value;
            this.component.getElementsByTagName('p')[0].innerText = o.name;
            this.component.querySelector(`.at5-close`).onclick = AtbImput.#remove;
            AtbImput.#atValide(this.component);
            AtbImput.#atToArray(this.component).forEach((e) => e.onclick = AtbImput.changeAt);
        }
    }
    static #atToArray(at){
        var bcs = [];
        at.querySelectorAll('input[type="checkbox"]').forEach(function (e){
             bcs.push(e); 
            });
        return bcs;
     }
     static #atValide(at){
        var bcs = AtbImput.#atToArray(at);
         bcs.forEach( (e, i) => {
            e.checked = i < at.value;
         });
     }
     static changeAt(event) {
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
        at.mirror.value = at.value;
        console.log(event.clientX, event.clientY)
        atValide(at)
    } 
    visibleCloseButton(){
        this.component.querySelector('.at5-close').classList.toggle('displaynone');
    }
    get value(){
        return this.#value;
    }
    set value(v){
        if((typeof v) === "number"){
            this.#value = v;
            this.component.value = v;
           AtbImput.atValide(this.component);
        }
    }
    get name(){
        return this.#name;
    }
    set name(v){
        if((typeof v) === "string"){
            this.#name = v;
            this.component.firstChild.innerText = v;
        }
    }
    static #remove(event){
        event.target.parentNode.mirror.column.remove(event.target.parentNode.mirror);
    }
}

/*  at5 */

class At5 extends AtbImput{
    constructor(o){
        super(o, 'http://localhost/proweb2/at5.html');
    }
}

/* coluna de atributos */

class AtbColumn extends Component{
    
    constructor(o){
        super(o,'http://localhost/proweb2/atb-column.html');
        if(o instanceof Element){
            /*
            atbColumnContent.childNodes.forEach((e) => {
                if(e instanceof Element)
                    this.content.push(e);
            });
            */
        }else{
            this.component.querySelector('.atb-column-h').innerText = o.name;
            this.name = o.name;
            this.content = new Array();
            var atbColumnContent = this.component.querySelector('.atb-column-content');
            o.content.forEach((e) => {
                var com = new At5(e);
                atbColumnContent.appendChild(com.component);
                this.content.push(com);
            });
            this.component.getElementsByClassName('atb-column-mais')[0].onclick = this.#mais;
            this.component.getElementsByClassName('atb-column-menos')[0].onclick = this.#menos;
        }
    }
    newAtb(name){
        var obj = {
            'name':'',
            'value': 0 
        };
        if((typeof name) ==='string')
            obj.name = name;
        else{
            var n = window.prompt('qual é o nome da nova habillidade?');
            obj.name = n;
        }
            
        var atb = new At5(obj);
        atb.column = this;
        this.content.push(atb);
        this.component.querySelector('.atb-column-content').appendChild(atb.component);
    }
    remove(com){
        var i = this.content.indexOf(com);
        this.content.splice(i,1);
        this.component.querySelector('.atb-column-content').removeChild(com.component);

    }
    #menos(event){
        var table  = event.target.parentNode.parentNode.mirror;
        table.content.forEach((e)=>{
            e.visibleCloseButton();
        });
    }
    #mais(event){
        event.target.parentNode.parentNode.mirror.newAtb();
    }

}