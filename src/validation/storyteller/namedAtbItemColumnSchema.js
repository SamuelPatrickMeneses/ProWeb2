const {arraySchema,booleanSchema,numberSchema,stringSchema,objectSchema} = require('objectschema');
const item = require('./namedAtbItemSchema.js');
module.exports = objectSchema({
    name: stringSchema({min: 1,max:20,notNull:true}),
    value: numberSchema({max: 5, min:0, notNull:true}),
    closable:false,
    list: arraySchema({schema: item, max:12,min:10,notNull:true}),
},undefined,true);