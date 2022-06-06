
class Component {
    constructor(o, url){
        var emcubadora = document.createElement('div');
        var privatecofig = {
            'configurable': true,
            'enumerable': false,
            'writable': false
        };
        if(o instanceof Element){
            Object.defineProperty(this,'_com',(privatecofig.value = o));
        }
        else{
            if(htmls[url] === undefined){
                var request = new XMLHttpRequest();
                request.onload = (event) =>{
                    if(event.target.status === 200){
                        htmls[url] = event.target.responseText;
                        emcubadora.innerHTML = event.target.responseText;
                    }
                };
                request.open('GET',url);
                request.send();
            }else{
                emcubadora.innerHTML = htmls[url];
                privatecofig.value = emcubadora.firstChild;
                Object.defineProperty(this,'_com',privatecofig);
            }
            this.component.mirror = this;
        }
    }
    get component(){
        return  Object.getOwnPropertyDescriptor(this,'_com').value;
    }
    getPropert(name){
        return Object.getOwnPropertyDescriptor(this,name).value;
    }
    defineProperty(name, value){
        if(value !== '_com'){
            var privatecofig = {
                'configurable': true,
                'enumerable': false,
                'writable': false,
                'value': value
            };
            Object.defineProperty(this, name,privatecofig);
        }
    }


}
class AtbImput extends Component{
    constructor(o, url){
        super(o, url);
        if(o instanceof Element){
            this.defineProperty('_value', o.value);
            this.defineProperty('_name',o.getElementsByTagName('p')[0].innerText);
        }else{
            this.defineProperty('_value', o.value);
            this.defineProperty('_name',o.name);
            this.component.value = o.value;
            this.component.getElementsByTagName('p')[0].innerText = o.name;
            this.component.querySelector(`.at5-close`).onclick = AtbImput.remove;
            AtbImput.atValide(this.component);
            AtbImput.atToArray(this.component).forEach((e) => e.onclick = AtbImput.changeAt);
        }
    }
    static atToArray(at){
        var bcs = [];
        at.querySelectorAll('input[type="checkbox"]').forEach(function (e){
             bcs.push(e); 
            });
        return bcs;
     }
     static atValide(at){
        var bcs = AtbImput.atToArray(at);
         bcs.forEach( (e, i) => {
            e.checked = i < at.value;
         });
     }
     static changeAt(event) {
        var at = event.target.parentNode.parentNode.parentNode.mirror;
        var bcs = AtbImput.atToArray(at.component);
        var index = bcs.indexOf(event.target);
        if(event.target.checked)
            at.value =  1 +  index ;
        else{
            if(index < (bcs.length -1)){
                var next = bcs[index + 1];
                if(next.checked){
                    at.value = index + 1;
                }else
                at.value =   index;

            }else
                at.value = index;
        }
        AtbImput.atValide(at.component);
    } 
    visibleCloseButton(){
        this.component.querySelector('.at5-close').classList.toggle('displaynone');
    }
    get value(){
        return this.getPropert('_value');
    }
    set value(v){
        if((typeof v) === 'number'){
            this.defineProperty('_value', v);
            this.component.value = v;
           AtbImput.atValide(this.component);
        }
    }
    get name(){
        return this.getPropert('_name');
    }
    set name(v){
        if((typeof v) === 'string'){
            this.defineProperty('_name', v);
            this.component.firstChild.innerText = v;
        }
    }
    static remove(event){
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
            this.content = [];
            var atbColumnContent = this.component.querySelector('.atb-column-content');
            o.content.forEach((e) => {
                var com = new At5(e);
                atbColumnContent.appendChild(com.component);
                this.content.push(com);
            });
            this.component.getElementsByClassName('atb-column-mais')[0].onclick = AtbColumn.mais;
            this.component.getElementsByClassName('atb-column-menos')[0].onclick = AtbColumn.menos;
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
    static menos(event){
        var table  = event.target.parentNode.parentNode.mirror;
        table.content.forEach((e)=>{
            e.visibleCloseButton();
        });
    }
    static mais(event){
        event.target.parentNode.parentNode.mirror.newAtb();
    }
    set name(name){
        if((typeof name) === 'string'){
            this.defineProperty('_name',name);
            this.component.firstChild.innerText = name;
        }
    }
    get name(){
        return this.getPropert('_name');
    }

}