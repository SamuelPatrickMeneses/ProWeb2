'use strict';
const fs = require('fs');
const htmlficha = {
  'assets/html/named-at5.html':'!',
  'assets/html/named-at20.html':'!',
  'assets/html/atb-column-editable.html':'!',
  'assets/html/atb-column.html':'!',
  'assets/html/named-text-input.html':'!',
  'assets/html/box.html':'!',
  'assets/html/named-box.html':'!',
  'assets/html/ficha-cabesalho.html':'!',
  'assets/html/text-e-atb10.html':'!',
  'assets/html/text-input.html':'!',
  'assets/html/at5.html':'!',
  'assets/html/at20.html':'!',
  'assets/html/text-e-atb.html':'!',
  'assets/html/at10.html':'!',
  'assets/html/panel-item.html':'!',
  'assets/html/at10-box.html':'!'

};
function load(url){
  fs.readFile('./public/'+url,(error,data)=>{
    htmlficha[url] = String(data);
  });
}
for(let url in htmlficha)
  load(url);
module.exports = htmlficha;