'use strict';

const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Tests app', function() {
  it('verifies get', function(done) {
    request.get('/tasks').expect(200).end(function(err, result) {

        console.log('Result is : ' + JSON.stringify(result));
        console.log('Error is : ' + err);

        test.string(JSON.stringify(result)).contains('pending');
        test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');

        done(err);
    });
  });
  it('verifies post', function(done) {
    request.post('/tasks').expect(200).end(function(err, result) {
        
        console.log('Result is : ' + JSON.stringify(result));
        console.log('Error is : ' + err);

        test.string(result.body.Output).contains('pending');
        test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
        done(err);
    });
  });
});
