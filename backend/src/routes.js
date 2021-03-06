const express = require('express');
const User = require('./controllers/User');
const Group = require('./controllers/Group');
const Course = require('./controllers/Course');
const Login = require('./controllers/Login');

const routes = express.Router();

// route grom users
routes.get('/users', User.get);
routes.get('/users/:id', User.getById);
routes.post('/register', User.save);

// route from groups
routes.get('/groups', Group.get);
routes.get('/groups/:id', Group.getById);
routes.post('/groups', Group.save);
routes.put('/groups/:id', Group.update);
routes.delete('/groups/:id', Group.destroy);

// route from course
routes.get('/course', Course.get);
routes.post('/course', Course.save);

// route from authenticate
routes.post('/login', Login.authenticate);

module.exports = routes;