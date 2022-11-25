'use strict';
const Cliente = require('mongodb').MongoClient;
var conection = null;
Cliente.connect('mongodb://localhost')
.then((com) => {
   conection = com.db('storyteller');
}).catch((err) => {
    console.log(err);
});
function cadastro(user){
    let promise = conection.collection('users').find( { 'email': user.email,senha: user.senha} ).toArray();
    promise.then((data)=>{
            return data.length !== 0;
        });
    return promise;
}
function checkUser(user){
    let promise = conection.collection('users').find( { 'email': user.email, senha:user.senha} ).toArray();
    promise.then((data)=>{
            return data.length !== 0;
        });
    return promise;
}
function panel(user){
    let promis1 = new Promise((resolve, reject) => {
        
        let promise2 = conection.collection('users').find( { 'email': user.email, senha:user.senha} ).toArray();
        promise2.then((data)=>{
                let promis3 = conection.collection('fichas').find( { user: data.email} ).toArray();
                promis3.then((data)=>{
                    let list = [];
                    data.forEach(element => {
                        list.push({id:element.id,name:element.cabesalho.name,createDate:element.cabesalho.createDate});
                    });
                    if(data.length > 0)    
                        resolve(list);
                    else
                        reject([]);
                });
        });
        
    });
    

}
module.exports = {conection,cadastro,checkUser,panel};