const {arraySchema,booleanSchema,numberSchema,stringSchema,objectSchema} = require('objectShema');

module.exports = objectSchema({
    name: stringSchema({min:1,max:20,notNull:true}),
    value: numberSchema({max: 5, min:0, notNull:true}),
    size: 5,
    type: 'atb',
});