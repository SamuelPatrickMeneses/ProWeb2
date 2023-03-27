'use strict';
const Cliente = require('mongodb').MongoClient;

const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const db   = process.env.DB || 'storyteller';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;


module.exports = async function(){
    const url = `mongodb://${user}:${pass}@${host}:${port}/${db}`;
    try{
        const com = await Cliente.connect(url);
        return com.db(db);
    }catch(err){
        throw err;
    }
        
}();