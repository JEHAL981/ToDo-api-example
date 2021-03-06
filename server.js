const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  config = require('./config/index'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useMongoClient: true })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(config.port);

console.log('todo list RESTful API server started on: ' + config.port);

module.exports = app;