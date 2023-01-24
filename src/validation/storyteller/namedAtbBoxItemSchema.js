const {arraySchema,booleanSchema,numberSchema,stringSchema,objectSchema} = require('objectschema');

module.exports = objectSchema({
    name: stringSchema({min: 1,max:20,notNull:true}),
    value: numberSchema({ min:0, max: 5, notNull:true}),
    size: 5,
    type: 'atb-box',
});