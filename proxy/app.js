var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { find, filter } from 'lodash';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var graphqlHTTP = require('express-graphql');
import { root } from './routes/schema';
import remoteSchema from './routes/remoteSchema';
import { mergeSchemas, makeExecutableSchema } from 'graphql-tools';

var app = express();
var port = 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());

async function run() {
  const schema = await remoteSchema();
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); 

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}


run();