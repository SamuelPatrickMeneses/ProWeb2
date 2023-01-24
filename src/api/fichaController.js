const fichaService = require('../services/fichaServise.js');

const post = async (req,res) => {
    'use strict';
    console.log(req.body)
    await fichaService.save(req.user,req.body)
    .then((data) => 
        res.status(201)
        .json(data)
    ).catch((err) => {
        console.log(err);
            res.status(err.status | 500)
            .json(err);
        }
    );
};

const get = async (req,res) => {
    'use strict';
    let id  = decodeURI(req.params.id);
    let fichas = req.user.fichas;
    if(id in fichas)
        res.status(200)
        .json(fichas[id]);
    else
        res.status(402)
        .json({message:'ficha inexistente!',status:404});

};

module.exports = {post,get};