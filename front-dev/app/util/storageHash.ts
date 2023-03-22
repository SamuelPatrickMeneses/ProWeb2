export default function(hash ?: string){
    'use strict';
    if(hash)
        sessionStorage.setItem('userHash',hash);
    else
        return sessionStorage.getItem('userHash');
}