function decode(hash){
    'use strict';
    const array = Buffer.from(hash,'base64')
    .toString('utf8')
    .split(' ');
    return {email:array[0],senha:array[1]};
}
function encode(object){
    'use strict';
    let hash = '';
    if(typeof object === 'string')
        hash = object;
    else
        hash = `${object.email} ${object.senha}`;
    return Buffer.from(hash,'utf8')
    .toString('base64');
}
module.exports = {encode,decode};


