var assert = require('assert');
var app = require('../../Application/index');
var http = require('http');
const { Console } = require('console');

describe('sampleUnitTests', function () {
    before(function () {
        console.log('Iniciando teste');
    });
  
    after(function () {
        console.log('finalizando teste');
        app.close();
     //   process.exit(0); /// somente teste local
    });

    it('Should return 200', function (done) {
        console.log(' teste 1 ');
        http.get('http://localhost:3000', function (res) {
            assert.equal(200, res.statusCode, 'Result code should be 200.');
            done();
        });
    });

    it('Assert title', function (done) {
        console.log(' teste 2 ');
        http.get('http://localhost:3000', function (res) {
            assert.equal(200, res.statusCode, 'Result code should be 200.');
            var data = '';

            res.on('data', function (chunk) {
                data += chunk;
            });

            res.on('end', function () {
                console.log(data);
                assert.equal(true, data.includes('<title>SLMM GCS teste</title>'), 'Title should be Express - Node.js Express Application.');
                done();
            })
        });
    });
});