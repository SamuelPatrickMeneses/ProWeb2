'use strict';
const Cliente = require('mongodb').MongoClient;

module.exports = async function(){
    try{
        const com = await Cliente.connect('mongodb://localhost:27017');
        return com.db('storyteller');
    }catch(err){
        throw err;
    }
        
}();