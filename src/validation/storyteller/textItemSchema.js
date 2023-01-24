const {arraySchema,booleanSchema,numberSchema,stringSchema,objectSchema} = require('objectschema');

module.exports = objectSchema({
    value: stringSchema({min:0,max:20,notNull:true}),
    type: 'text',
    size: 20,
});