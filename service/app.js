var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { find, filter } from 'lodash';

// import { initialize } from './db/initializer';

// initialize();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var graphqlHTTP = require('express-graphql');
import { mergeSchemas, makeExecutableSchema } from 'graphql-tools';

var app = express();
var port = 3002;

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

import { makeSchemaExecutable } from 'graphql-tools';

const typeDefs = `
  type Query {
    post(id: Int!): Post
    posts: [Post]
    author(id: Int!): Author
    authors: [Author]
  }

  type Post {
    id: Int!
    title: String
    author: Author
  }
  
  type Author {
    id: Int!
    firstName: String
    lastName: String
    email: String
    posts: [Post]
  }

  schema {
    query: Query
  }
`
var models = require('./models');

const resolvers = {
  Query: {
    post: (_, {id}) => models.post.findById(1, { include: ['author'] }),
    posts: (_, {id}) => models.post.findAll(),
    author: (_, {id}) => models.author.findById(id),
  },
  Post: {
    author: ({author, author_id}) => {
      return author ? author : models.author.findById(author_id, { include: ['posts'] });
    }
  },
  Author: {
    posts: ({id, posts}) => posts ? posts : models.post.findAll({ where: { author_id: id }})
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))