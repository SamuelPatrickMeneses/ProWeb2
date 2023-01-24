import {Component} from './estruturas.js';
class Imput extends Component{
    constructor(o, url){
        super(o, url);
        //console.log(o);
        this.component.value = o.value;
        this.value = o.value;
        var close = this.component.querySelector(`.input-close`);
        if(close !== null)
            close.onclick = Imput.remove;
    }
    visibleCloseButton(){
        this.component.querySelector('.at5-close').classList.toggle('displaynone');
    }
    static remove(event){
        event.target.parentNode.mirror.column.remove(event.target.parentNode.mirror);
    }
}class BoxImput extends Imput{
    constructor(o, url){
        super(o, url ||'assets/html/box.html');
        this.component.value = o.value;
        this.value = o.value;
        this.component.querySelectorAll('.box').forEach((e)=>{
            e.onclick = BoxImput.changeAt;
            e.mirror = this;
        });
        $(this.component).addClass('imput-width');
    }
     static atValide(box,at){
        switch(at.value){
            case 0:
                box.classList.remove('x');
                box.classList.add('bara');
                break;
            case 1:
                box.classList.remove('bara');
                box.classList.add('x');
                break;
            case 2:
                box.classList.remove('x');
                box.classList.remove('bara');
                break;
        }
    }
     static changeAt(event){
        var at = event.target.mirror;
        BoxImput.atValide(this,at);
            if(at.value < 2)
                ++at.value;
            else
                at.value = 0;
    } 
    get value(){
        return this.getPropert('_value');
    }
    set value(v){
        if((typeof v) === 'number'){
            this.defineProperty('_value', v);
            this.component.value = v;
        }
    }
    get status(){
        return {value:this.value};
    }
}
class TextInput extends Imput{
    constructor(o,url){
        super(o,url||'assets/html/text-input.html');
        if(o instanceof Element){
            this.value = this.component.querySelector('input').value;
        }else{
            this.value = o.value || '';
        }
        $('.at input',this.component).change((event)=>{
            this.defineProperty('_value',event.target.value);
        });
        $(this.component).addClass('imput-width');
    }
    get value(){
        return this.getPropert('_value');
    }
    set value(v){
        if((typeof v) === 'string'){
            this.defineProperty('_value', v);
            this.component.querySelector('input').value = v;
        }
    }

    get status(){
        return {value:this.value};
    }
}
class NamedBoxImput extends BoxImput{
    constructor(o, url){
        super(o, url || 'assets/html/named-box.html');
        if(o instanceof Element){
            this.defineProperty('_name',o.getElementsByTagName('p')[0].innerText);
            this.defineProperty('_label',o.getElementsByTagName('p')[1].innerText);
        }else{
            this.defineProperty('_name',o.name);
            this.defineProperty('_label',o.label);
            var title = this.component.getElementsByTagName('p')[0];
            if(title !== undefined)
                title.innerText = o.name;
            var label = this.component.getElementsByTagName('p')[1];
            if(label !== undefined)
                label.innerText = o.label;
        
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
    get label(){
        return this.getPropert('_label');
    }
    set label(v){
        if((typeof v) === 'string'){
            this.defineProperty('_label', v);
            this.component.querySelector('.at-name2').innerText = v;
        }
    }
    get status(){
        return {name:this.name,label:this.label,value:this.value};
    }
}
class AtbImput extends Imput{
    constructor(o, url){
        super(o, url ||'assets/html/at5.html');
        this.component.value = o.value;
        this.value = o.value;
        this.component.querySelectorAll('input[type="checkbox"]')
        .forEach((e)=>e.onclick = AtbImput.changeAt);
        this.component.querySelectorAll('input[type="checkbox"]').forEach((e)=>e.mirror = this);
        $(this.component).addClass('imput-width');
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
        var at = event.target.mirror;
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
    get status(){
        return {value:this.value};
    }
}
class NamedAtbImput extends AtbImput{
    constructor(o, url){
        super(o, url || 'assets/html/named-at5.html');
        if(o instanceof Element){
            this.defineProperty('_name',o.getElementsByTagName('p')[0].innerText);
        }else{
            this.defineProperty('_name',o.name);
            var title = this.component.getElementsByTagName('p')[0];
            if(title !== undefined)
                title.innerText = o.name;
        }
    $(this.component).addClass('imput-width');
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
    get status(){
        return {name:this.name,value:this.value};
    }
}

/*  at5 */

class At5 extends NamedAtbImput{
    constructor(o){
        super(o, 'assets/html/named-at5.html');
    }
}
class At20 extends NamedAtbImput{
    constructor(o){
        super(o, 'assets/html/named-at20.html');
    }
}
/*text-input*/
class NamedTextInput extends TextInput{
    constructor(o){
        super(o,'assets/html/named-text-input.html');
        if(o instanceof Element){
            this.defineProperty('_name',o.getElementsByClassName('.at-name')[0].innerText);
        }else{
            this.defineProperty('_name',o.name);
            this.name = o.name;
        }
    }
    get name(){
        return this.getPropert('_name');
    }
    set name(v){
        if((typeof v) === 'string'){
            this.defineProperty('_name', v);
            this.component.querySelector('.at-name').innerText = v;
        }
    }
    get status(){
        return {name:this.name,value:this.value};
    }
}
/* coluna de atributos */

class AtbColumn extends Imput{
    constructor(o,url,Type){
        super(o,url ||'assets/html/atb-column.html');
        if(o instanceof Element){
            /*
            atbColumnContent.childNodes.forEach((e) => {
                if(e instanceof Element)
                    this.content.push(e);
            });
            */
        }else{
            this.Type = Type;
            this.component.querySelector('.atb-column-h').innerText = o.name;
            this.name = o.name;
            this.content = [];
            var atbColumnContent = this.component.querySelector('.atb-column-content');
            o.content.forEach((e) => {
                var com = new this.Type(e);
                com.column = this;
                atbColumnContent.appendChild(com.component);
                this.content.push(com);
            });
        }
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
    addComponent(o){
        this.content.push(o);
        o.column = this;
        var atbColumnContent = this.component.querySelector('.atb-column-content');
        atbColumnContent.appendChild(o.component);
    }
    get status(){
        return {name:this.name, content:this.content.map((e)=> {
            return e.status;
        })};
    }

}
/*input de virtudes */
class TextEAtbInput extends AtbImput{
    constructor(o, url){
        super(o,url||'assets/html/text-e-atb.html');
        if(o instanceof Element){
            this.value = o.value;
            this.name =  $('.at-name .text-input-black',this.component).val();
        }else{
            this.value = o.value;
            this.name = o.name;
            this.component.value = o.value;
            $('.at-name .text-input-black',this.component).val(o.name);
        }
        $('.at-name .text-input-black',this.component).change((event)=>{
            this.defineProperty('_name',event.target.value);
        });
        $(this.component).addClass('imput-width');
    }
    get name(){
        return this.getPropert('_name');
    }
    set name(v){
        if((typeof v) === 'string'){
            this.defineProperty('_name', v);
            $('input.text-input-black',this.component).val(v);
        }
    }
    get status(){
        return {name:this.name,value:this.value};
    }
}
class AtbColumnEditable extends AtbColumn{
    constructor(o,url,Type){
        super(o,url||'assets/html/atb-column-editable.html',Type);
        this.Type = Type;
        $('.atb-column-mais',this.component).click(AtbColumnEditable.mais);
        $('.atb-column-menos',this.component).click(AtbColumnEditable.menos);
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
            
        var atb = new this.Type(obj);
        atb.column = this;
        this.content.push(atb);
        this.component.querySelector('.atb-column-content').appendChild(atb.component);
    }
    remove(com){
        var i = this.content.indexOf(com);
        this.content.splice(i,1);
        this.component.querySelector('.atb-column-content').removeChild(com.component);

    }
    static menos(){
        var inputs = $('.input-close',this.parentNode.parentNode);
        inputs.toggleClass('displaynone');
    }
    static mais(event){
        event.target.parentNode.parentNode.mirror.newAtb();
    }
    get status(){
        return {name:this.name, content:this.content.map((e)=> {
            return e.status;
        })};
    }
}
class Ficha{
    constructor(o){
        this.cabesalho = new AtbColumn(
            o.cabesalho,'assets/html/ficha-cabesalho.html',NamedTextInput);
        document.querySelector('#row1').appendChild(this.cabesalho.component);
        /*atributos*/
        this.atributos = new AtbColumn(o.atributos,'assets/html/ficha-cabesalho.html',AtbColumn);
        this.atributos.fisicos = new AtbColumn(o.atributos.fisicos,undefined,NamedAtbImput);
        this.atributos.addComponent(this.atributos.fisicos);
        this.atributos.sociais = new AtbColumn(o.atributos.sociais,undefined,NamedAtbImput);
        this.atributos.addComponent(this.atributos.sociais);
        this.atributos.mentais = new AtbColumn(o.atributos.mentais,undefined,NamedAtbImput);
        this.atributos.addComponent(this.atributos.mentais);
        document.querySelector('#row2').appendChild(this.atributos.component);
        /*hablidade*/
        this.habilidades = new AtbColumn(
            o.habilidades,'assets/html/ficha-cabesalho.html',AtbColumnEditable);
        this.habilidades.talentos = new AtbColumnEditable(
            o.habilidades.talentos,undefined, NamedAtbImput);
        this.habilidades.addComponent(this.habilidades.talentos);
        this.habilidades.pericias = new AtbColumnEditable(
            o.habilidades.pericias,undefined, NamedAtbImput);
        this.habilidades.addComponent(this.habilidades.pericias);
        this.habilidades.conhecimentos = new AtbColumnEditable(
            o.habilidades.conhecimentos,undefined, NamedAtbImput);
        this.habilidades.addComponent(this.habilidades.conhecimentos);
        document.querySelector('#row3').appendChild(this.habilidades.component);
        /*vantagens*/
        this.vantagens = new AtbColumn(o.vantagens,'assets/html/ficha-cabesalho.html',AtbColumn);
        this.vantagens.antecedentes = new AtbColumnEditable(
            o.vantagens.antecedentes,undefined, NamedAtbImput);
        this.vantagens.addComponent(this.vantagens.antecedentes);
        this.vantagens.disciplinas = new AtbColumnEditable(
            o.vantagens.disciplinas,undefined,NamedAtbImput);
        this.vantagens.addComponent(this.vantagens.disciplinas);
        this.vantagens.virtudes = new AtbColumn(o.vantagens.virtudes,undefined,TextEAtbInput);
        this.vantagens.addComponent(this.vantagens.virtudes);
        document.querySelector('#row4').appendChild(this.vantagens.component);
        /*oltros*/
        this.outros = new AtbColumn(o.vantagens,'assets/html/ficha-cabesalho.html',AtbColumn);
        this.outros.qd  = new AtbColumnEditable(o.outros.qd,undefined,TextInput);
        this.outros.addComponent(this.outros.qd);
        this.outros.tvs = new AtbColumn(o.outros.tvs,undefined,Imput);
        this.outros.tvs.trilha = new TextEAtbInput(
            o.outros.tvs.trilha,'assets/html/text-e-atb10.html');
        this.outros.tvs.addComponent(this.outros.tvs.trilha);
        this.outros.tvs.fv = new AtbColumn(o.outros.tvs.fv);
        this.outros.tvs.fv.principal = new AtbImput(
            o.outros.tvs.fv.principal,'assets/html/at10.html');
        this.outros.tvs.fv.atual = new AtbImput(o.outros.tvs.fv.atual,'assets/html/at10-box.html');
        this.outros.tvs.fv.addComponent(this.outros.tvs.fv.principal);
        this.outros.tvs.fv.addComponent(this.outros.tvs.fv.atual);
        this.outros.tvs.addComponent(this.outros.tvs.fv);
        this.outros.tvs.sangue = new NamedAtbImput(
            o.outros.tvs.sangue,'assets/html/named-at20.html');
        this.outros.tvs.addComponent(this.outros.tvs.sangue);
        this.outros.vit = new AtbColumn(o.outros.vit,undefined,NamedBoxImput);
        this.outros.addComponent(this.outros.tvs);
        this.outros.addComponent(this.outros.vit);
        document.getElementById('row5').appendChild(this.outros.component);
        console.log(this.status);
    }
    get status(){
        return {cabesalho: this.cabesalho.status,
                atributos:this.atributos.status,
                habilidades:this.habilidades.status,
                vantagens:this.vantagens.status,
                outros:this.outros.status};
    }
}
export {AtbColumn,At5,TextInput,AtbColumnEditable,TextEAtbInput
       ,At20,NamedAtbImput,NamedTextInput,NamedBoxImput, Ficha};