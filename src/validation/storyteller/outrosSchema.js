const { arraySchema, booleanSchema, numberSchema, stringSchema, objectSchema } = require('objectschema');
const textItemSchema = require('./textItemSchema.js');

const column1 =    objectSchema({
                        name: 'desvantagens',
                        closable: true,
                        list: arraySchema({ schema: textItemSchema, max: 12, min: 0, notNull: true }),
                    }, undefined, true);

const column2 =  objectSchema({
                    name: 'estatus',
                    closable: false,
                    list: arraySchema({
                        schema: [
                            objectSchema({
                                name: stringSchema({ min: 1, max: 20, notNull: true }),
                                value: numberSchema({ min: 0, max: 10, notNull: true }),
                                size: 10,
                                type: 'atb',
                            }),
                            objectSchema({
                                name: 'força de vontade',
                                value: numberSchema({ min: 0, max: 10, notNull: true }),
                                limit: numberSchema({ min: 0, max: 10, notNull: true }),
                                size: 10,
                                type: 'atb',
                            }),
                            objectSchema({
                                name: 'pontos de sangue',
                                value: numberSchema({ min: 0, max: 10, notNull: true }),
                                size: 10,
                                type: 'atb-box',
                            })
                        ], max: 3, min: 3, notNull: true
                    }),
                }, undefined, true);

const column3 =    objectSchema({
                    name: stringSchema({ min: 1, max: 20, notNull: true }),
                    closable: false,
                    list: arraySchema({
                        schema:
                            objectSchema({
                                name: stringSchema({ min: 1, max: 20, notNull: true }),
                                value: numberSchema({ min: 0, max: 2, notNull: true }),
                                type: 'life-box',
                            }), max: 7, min: 7, notNull: true
                    }),
                }, undefined, true);
module.exports = objectSchema({
    desvantagens: column1,
    estatus: column2,
    vitalidade: column3,
}, undefined, true);  