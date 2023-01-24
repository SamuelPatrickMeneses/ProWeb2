export default function(hash){
    'use strict';
    if(hash)
        sessionStorage.setItem('userHash',hash);
    else
        return sessionStorage.getItem('userHash');
}