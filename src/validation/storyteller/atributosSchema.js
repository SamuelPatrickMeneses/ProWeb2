const {arraySchema,booleanSchema,numberSchema,stringSchema,objectSchema} = require('objectschema');
module.exports = objectSchema({
    name:'atributos',
    'físicos': objectSchema({
        name: 'físicos',
        closable:false,
        list: arraySchema({
            schema: [   
                objectSchema({
                    name: 'força',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true),
                objectSchema({
                    name: 'destreza',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true),
                objectSchema({
                    name: 'vigor',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true)
            ],
        max:3,min:3,notNull:true}),
    },undefined,true),
    sociais: objectSchema({
        name: 'sociais',
        closable:false,
        list: arraySchema({
            schema: [
                objectSchema({
                    name: 'carisma',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true),
                objectSchema({
                    name: 'manipulação',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true),
                objectSchema({
                    name: 'Aparência',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true)
            ],
        max:3,min:3 ,notNull:true}),
    },undefined,true),
    mentais: objectSchema({
        name: 'mentais',
        closable:false,
        list: arraySchema({
            schema: [
                objectSchema({
                    name: 'Percepção',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true),
                objectSchema({
                    name: 'Inteligência',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true),
                objectSchema({
                    name: 'Raciocínio',
                    value: numberSchema({min:0, max: 5, notNull:true}),
                    size: 5,
                    type: 'atb',
                },undefined,true)
            ],
        max:3,min:3,notNull:true}),
    },undefined,true),
},undefined,true);