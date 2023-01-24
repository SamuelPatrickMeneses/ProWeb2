const rotas = require('express').Router();
const {cadastrar,listaFichas} = require('./userController.js');
const {post,get} = require('./fichaController.js');
const am = require('./authenticationMiddlewarer.js');

rotas.post('/cadastro',cadastrar);
rotas.use('/ficha',am);
rotas.get('/ficha/:id',get);
rotas.get('/ficha',listaFichas);
rotas.post('/ficha',post);

module.exports = rotas;