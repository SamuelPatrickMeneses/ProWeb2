'use strict';

const glob = self;


let identificador = 'my';
let versao = 10;
let idAtual = identificador + '-' + versao;

const list = [
'/',
'assets/html/panel-login.html',
'assets/html/panel-cadastro.html',
'assets/css/reset.css',
'assets/css/dev.css',
'app/index.js',
'app/util/ajax.js',
'app/util/privado.js',
'app/util/render.js',
'app/controller/login-e-cadastro.js',
'app/components/component.js',
'app/components/bol.js',
'app/components/atb.js',
'app/components/label.js',
'app/components/closerButton.js',
'app/components/columnButton.js',
'app/components/item.js',
'app/components/listView.js',
'app/components/itemListView.js',
'app/components/column.js',
'app/lib/jquery.js',
'/manifest.webmanifest'];

glob.addEventListener('install',() => {
    //global.caches.delete(idAnterior);
    glob.caches.keys().then((cls) => {
        cls.forEach((cl) => {
            if(cl != idAtual)
                glob.caches.delete(cl);
        });

    });
});

glob.addEventListener('activate',
    (event) => 
    event.waitUntil(
        glob.caches.open(idAtual)
        .then( (cache) => cache.addAll(list) )
    )

);

glob.addEventListener('fetch',(event) => 
    event.respondWith(
        glob.caches.match(event.request)
            .then((file) => file || glob.fetch(event.request))
    )
);

