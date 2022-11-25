const {arraySchema,booleanSchema,numberSchema,stringSchema,objectSchema} = require('objectShema');

module.exports = objectSchema({
    value: stringSchema({min:1,max:20,notNull:true}),
    name: stringSchema({min:1,max:20,notNull:true}),
    type: 'text',
});