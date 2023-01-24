const { arraySchema, booleanSchema, numberSchema, stringSchema, objectSchema } = require('objectschema');
const item = require('./namedAtbItemSchema.js');
module.exports = objectSchema({
    disciplinas: objectSchema({
        name: 'disciplinas',
        closable: true,
        list: arraySchema({ schema: item, max: 10, min: 0, notNull: true }),
    }, undefined, true),
    antecedentes: objectSchema({
        name: 'antecedentes',
        closable: true,
        list: arraySchema({ schema: item, max: 10, min: 0, notNull: true }),
    }, undefined, true),
    virtudes:     objectSchema({
        name: 'virtudes',
        closable: false,
        list: arraySchema({ schema: item, max: 3, min: 3, notNull: true }),
    }, undefined, true)
}, undefined, true);