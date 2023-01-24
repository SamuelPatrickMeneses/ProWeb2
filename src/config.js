const express = require('express');
const {urlencoded} = require('body-parser');
const app = express();
app.use(urlencoded());
app.use(express.json());

app.set('port', process.env.PORT | 3000);

app.setStatic = (rPach) => {
    'use strict';
    app.use(express.static(rPach)); 
};

module.exports = app;