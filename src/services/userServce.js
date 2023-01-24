const dao = require('../dao/userDAO.js');
const bcrypt = require('bcryptjs');
const userSchema = require('../validation/userShema.js');
const { then } = require('../db.js');
const salt = process.env.BCRYPT_SALT | 8;

async function encrypt(senha){
    'use strict';
    return await bcrypt.hash(senha,salt);
}

async function cadastrar(user){
    'use strict';
    let usuario = null;
    try{
        usuario = userSchema(user,'user');
    }catch(err){
        err.status = 422;
        throw err;
    }
    return await dao.findByEmail(usuario.email)
    .then(async (data) => {
        if(!data){
            usuario.senha = await encrypt(usuario.senha);
            return await dao.save(usuario)
            .then(() => {
                
                return {message:'Usuario cadastrado com sussesso'};
            });
        }else
            throw {err:422,message:'este ususario ja existe'};
    }).catch(
        (err) => err
    );
}
async function listarFichasByEmail(email){
    'use strict';
    let usuario = null;
    try{
        usuario = userSchema(user,'user');
    }catch(err){
        err.status = 422;
        throw err;
    }
    return await dao.findByEmail(usuario.email)
    .then(async(data) => {
        if(!data)
            throw {message: 'Usuario inesistente',status:204};
        return await listarFichas(data);
        });
}
async function listarFichas(user){
    'use strict';
    let retorno = [];
    for(let o of Object.entries(user.fichas))
        retorno .push({
            name:  o[1].head.nome.value,
            id:    o[0],
            data:  o[1].data,
            'clã': o[1].head['clã'].value
        });
    return retorno;
}
async function autentica(user){
    'use strict';
    let usuario = null;
    try{
        usuario = userSchema(user,'user');
    }catch(err){
        err.status = 422;
        throw err;
    }
    return await dao.findByEmail(usuario.email)
    .then(async (data) => {
        if(!data)
            throw {message: 'Usuario inesistente',status:204};
        return await bcrypt.compare(usuario.senha,data.senha)
        .then(() =>  data);
    }
        
    );
}

module.exports = {cadastrar,listarFichasByEmail,autentica,listarFichas};