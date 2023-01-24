'use strict';
//const db = require('./db');

const htmlficha = require('../assetsJSON/htmlficha.js');
const route = require('./api/index.js');
const app = require('./config.js');
const { Console } = require('console');
const outrosSchema = require('./validation/storyteller/outrosSchema.js');
const headerSchema = require('./validation/storyteller/headerSchema.js');
const path = require('path');

/*app.use((error,request,response,next)=>{
  response.type('text/plain');
  console.log(request.body)
  response.status(404);
  response.send('404 - Error!');
});
app.use((error,request,response,next)=>{
  response.type('text/plain');
  response.status(500);
  response.send('500 - Error!');
});
app.get('/htmlficha.js',(request,response)=>{
  response.type('text/javascript');
  var retorno = `var htmls = ${JSON.stringify(htmlficha)}; localStorage.setItem('htmls',  JSON.stringify(htmls));`;
  response.send(retorno);
});
app.post('/cadastro',(request,response)=>{ 
  response.type('text/plain');
  let is = db.cadastro(request.body);
  is.then((data)=>{
    console.log(data)
    if(data.length === 0){
      response.status = 200;
      response.send('true');
    }else{
      response.status = 400;
      response.send('false');
    }
  });
});
app.post('/login',(request,response)=>{
    response.type('text/plain');
    let is = db.checkUser(request.body);
    is.then((data)=>{
        console.log(data);
        if(data){
          response.status = 200;
          response.send('true');
        }else{
          response.status = 400;
          response.send('false');
        }
    });
});
app.post('/panel',(request,response)=>{
  response.type('text/plain');
  let is = db.panel(request.body);
  is.then((data)=>{
      console.log(data);
      if(data){
        response.status = 200;
        response.send(JSON.stringify(data));
      }else{
        response.status = 400;
        response.send('false');
      }
  });
});*/

app.setStatic(path.join(__dirname,'../public'));
//app.use('/api',route);
app.listen(app.get('port'),() => {
  console.log(`port: ${app.get('port')}`);
});
/*https.createServer(app).listen(app.get('port'),() => console.log(
  `listem port:${app.get('port')}`
  ));*/