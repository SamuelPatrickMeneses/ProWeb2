const {objectSchema, stringSchema} = require('objectschema');

module.exports = objectSchema({
    nome:objectSchema({
            value: stringSchema({min:0,max:20,notNull:true}),
            name: 'nome',
            type: 'text',
            size: 20,
        }),
    natureza: objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'natureza',
        type: 'text',
        size: 20,
    }),
    geração: objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'geração',
        type: 'text',
        size: 20,
    }),
    jogador:objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'jogador',
        type: 'text',
        size: 20,
    }),
    comportamento: objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'comportamento',
        type: 'text',
        size: 20,
    }),
    'senhor': objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'senhor',
        type: 'text',
        size: 20,
    }),
    'crônica': objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'crônica',
        type: 'text',
        size: 20,
    }),
    'clã': objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'clã',
        type: 'text',
        size: 20,
    }),
    conceito: objectSchema({
        value: stringSchema({min:0,max:20,notNull:true}),
        name: 'conceito',
        type: 'text',
        size: 20,
    }),
},undefined,true);