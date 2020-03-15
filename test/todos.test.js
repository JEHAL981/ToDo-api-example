const app = require('../server');
const request = require('supertest');
const assert = require('assert');

describe('API Tests', () => {
  let task = {
    name: 'Buy milk',
  };

  describe('Create a new task ',  () => {
    test('should create a task', (done) => {
      request(app)
        .post('/tasks')
        .send(task)
        .end(function(err, res) {
          assert.equal(res.statusCode, 200);
          task = res.body;
          done();
        });
    });
  });

  describe('Get all tasks', () => {
    test('should get all tasks', (done) => {
      request(app)
        .get('/tasks')
        .end(function(err, res) {
          assert.equal(res.statusCode, 200)
          done();
        });
    });
  });
  describe('Get a task',  () => {
    test('should get a task', (done) => {
      request(app)
        .get('/tasks/' + task._id)
        .end(function(err, res) {
          assert.equal(res.statusCode, 200)
          assert.equal(res.body.name, 'Buy milk')
          done();
        });
    });
  });

  describe('Update a task', () => {
    test('should modify a task',(done) => {
      task.name = 'New Task';
      request(app)
        .put('/tasks/' + task._id)
        .send(task)
        .end(function(err, res) {
          assert.equal(res.statusCode, 200)
          assert.equal(res.body.name, 'New Task')
          done();
        });
    });
  });
  describe('Delete a task ', () => {
    test('should delete a task', (done) => {
      request(app)
        .delete('/tasks/' + task._id)
        .end(function(err, res) {
          assert.equal(res.statusCode, 200)
          assert.equal(res.body.message, 'Task successfully deleted')
          done();
        });
    });
  });
});
