const userDao = require('../dao/userDAO.js');
const cripto = require('../cripto/base64.js');
const schema = require('../validation/storyteller/fichaSchema.js');

async function update(user,ficha){
    'use strict';
    user.fichas[ficha.id] = schema(ficha,'ficha');
    return  userDao.updatefichas(user)
    .then(() => {
        return {message:'Ficha salva com sussesso',id: newKey,status:201};
    })
    .catch(() => {
        return {message:'Erro ao salvar ficha',status: 500};
    });
}

async function save(user,ficha){
    'use strict';
    let keys = Object.keys(user.fichas);
    console.log(keys)
    if(ficha.id in keys)
        return update(user,ficha);
    if(keys.length < 20){
        let newKey = cripto.encode(Date.now()+' '+user.email);  
        console.log(newKey)
        ficha.id = newKey;
        ficha.data = String(Date.now());
        console.log(user);
        user.fichas[newKey] = schema(ficha,'ficha'); 
        
        return await userDao.updatefichas(user)
        .then(() => {
            return {message:'Ficha salva com sussesso',id: newKey,status:201};
        })
        .catch(() => {
            return {message:'Erro ao salvar ficha',status: 500};
        });
    }else
        throw {message:'limite de fichas essedido',status: 400};
}

module.exports = {save,update};