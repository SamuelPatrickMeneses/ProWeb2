const { objectSchema, stringSchema } = require('objectschema');
const head = require('./headerSchema.js');
const atributos = require('./atributosSchema.js');
const habilidades = require('./habilidadesSchema.js');
const vantagens = require('./vantagensSchema.js');
const outros = require('./outrosSchema.js');
module.exports = objectSchema({
    id: stringSchema({notNull:true,max:60,min:1}),
    data: stringSchema({notNull:true,max:30,min:1}),
    head:           head,
    atributos:      atributos,
    habilidades:    habilidades,
    vantagens:      vantagens,
    outros:         outros
},undefined,true);