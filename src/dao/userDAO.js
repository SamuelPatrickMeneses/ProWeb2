let collection = undefined;
require('../db.js')
.then((con) => {
    'use strict';
    collection = con.collection('users');
})
.catch((err) => {
    'use strict';
    throw err;
});

async function save(user){
    'use strict';
           return await collection.insertOne(user);
}
async function updatefichas(user){
    'use strict';
    return collection.updateOne({email:user.email},{$set:{
        fichas: user.fichas
    }});
}
async function findByEmail(email){
    'use strict';
    return await collection.findOne({ 'email': email});
}
async function getFichasByEmail(email){
    'use strict';
    return await collection.findOne({ 'email': email})
    .then((user) => user.fichas);
}


module.exports = {save,getFichasByEmail,findByEmail,updatefichas};