'use strict';
var debug = require('debug');
var express = require('express');
//var path = require('path');
//var logger = require('morgan');
//var bodyParser = require('body-parser');

var server;
var app = express();

//app.use(logger('dev'));
app.set('title','Express - Node.js Express Application')
app.use('/', (req,res) => {
    res.send("<title>Express - Node.js Express Application</title><br>Hello turma...");
});

//process.env.NODE_ENV = "production";

console.log("antes de setar a porta");
app.set('port', process.env.PORT || 3000);

exports.listen = function () {
    server = app.listen(app.get('port'), function () {
        debug('Express server listening on port ' + server.address().port);
    });
}

exports.close = function () {
    server.close(() => {
        debug('Server stopped.');
    });
}

this.listen();


/*
var http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'});
    res.end('<html><head>Teste</head>'+ 
            '<body><h1>Alo turma<br>tudo bem<br></h1></body>'+
            '</html>');
}).listen(3001);

console.log('Control C para parar...')


console.log("antes de setar a porta");
app.set('port', process.env.PORT || 3000);

exports.listen = function () {
    server = app.listen(app.get('port'), function () {
        debug('Express server listening on port ' + server.address().port);
    });
}

exports.close = function () {
    server.close(() => {
        debug('Server stopped.');
    });
}

this.listen();

*/