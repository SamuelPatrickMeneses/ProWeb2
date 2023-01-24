const userService = require('../services/userServce.js');

const cadastrar = async (req,res) => {
    'use strict';
    console.log(`no controler ${JSON.stringify(req.body)}`);
    await userService.cadastrar(req.body)
    .then((data) => {
        console.log(data)
        res.status(data.status ? data.stasus :201)
        .json(data);
    }
    ).catch((err) =>
        res.status(err.status)
        .json(err)
    );
};
const listaFichas = async (req,res) => {
    'use strict';
    console.log('foi');
    userService.listarFichas(req.user)
    .then((data) => {
        console.log(data);
        res.status(200)
        .json(data);
    }

    ).catch((err) =>
        res.status(err.status)
        .json(err)
    );
};

module.exports = {cadastrar,listaFichas};