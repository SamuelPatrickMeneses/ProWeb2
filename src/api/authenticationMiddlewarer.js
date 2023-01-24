const userService = require('../services/userServce.js');
const base64 = require('../cripto/base64.js');

module.exports = async (req, res, nex) => {
    'use strict';
    try{
        const hash = req.headers.authorization;
        const usuario = base64.decode(hash);
        await userService.autentica(usuario)
        .then((user) => {
            req.user = user;
            console.log('autenticado!');
            nex();
        })
        .catch((err) => {
            console.log(err);
            res.status(401)
            .json({message:'Não autorisado!',starus:401});
        });
    }catch(ex){
        console.log(ex);
    }
};