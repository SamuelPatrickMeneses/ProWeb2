const {stringSchema,objectSchema} = require('objectschema');

module.exports = objectSchema({
    email: stringSchema({
        patern: '^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]+?$',
        notNull: true
    }),
    senha: stringSchema({
        min: 8,
        max: 15
    }),
    fichas: {}

},undefined,true); 