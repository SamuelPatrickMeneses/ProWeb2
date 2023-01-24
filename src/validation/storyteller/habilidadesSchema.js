const {arraySchema,booleanSchema,numberSchema,stringSchema,objectSchema} = require('objectschema');
const item = require('./namedAtbItemSchema.js');
const namedAtbItemClosableColumnSchema = objectSchema({
    name: stringSchema({min: 1,max:20,notNull:true}),
    closable:true,
    list: arraySchema({schema: item, max:12,min:10,notNull:true}),
},undefined,true);


module.exports = objectSchema({
    talentos: objectSchema({
        name: 'talentos',
        closable:true,
        list: arraySchema({schema: item, max:12,min:10,notNull:true}),
    },undefined,true),
    'perícias': objectSchema({
        name: 'perícias',
        closable:true,
        list: arraySchema({schema: item, max:12,min:10,notNull:true}),
    },undefined,true),
    conhecimentos: objectSchema({
        name: 'conhecimentostalentos',
        closable:true,
        list: arraySchema({schema: item, max:12,min:10,notNull:true}),
    },undefined,true),
},undefined,true);