'use strict';

const server = require('../server.js');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;

chai.use(http);

describe('Server module', function() {
  before(done => {
    server.listen(3030);
    done();
  });


  describe('POST method', function() {//write
    describe('/ endpoint', function() {
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
    .post('/badReq')
    .send({})
    .end((err, res) => {
      let cowsay = cowsay.say({text: 'bad request\ntry: localhost:3030/'});
      expect(res.text.toString()).to.equal(cowsay);
      expect(res).to.have.status(400);
      done();
    });
      });
    });
    describe('/cowsay endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
    .post('/cowsay')
    .send({text: 'hello world'})
    .end((err, res) => {
      let cowsay = cowsay.say({text: 'hello world'});
      expect(res.text.toString()).to.equal(cowsay);
      expect(res).to.have.status(200);
      done();
    });
      });
    });
  });

  describe('GET method', function() {//read
    describe('/ endpoint', function() {
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
      .post('/badReq?text=test endpoint')
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
      });
    });
    describe('/cowsay endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
        .post('/cowsay?text=test endpoint')
        .send({text: 'hello world'})
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
      });
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
          .post('/badReq?text=test endpoint')
          .send({})
          .end((err, res) => {
            expect(res).to.have.status(400);
            done();
          });
      });
    });

    after(done => {
      server.close();
      done();
    });
  });
});
