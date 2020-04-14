const express = require('express');
const User = require('./controllers/User');
const Group = require('./controllers/Group');

const routes = express.Router();

routes.get('/users', User.index);
routes.post('/users', User.store);

routes.get('/groups', Group.index);
routes.post('/groups', Group.store);

module.exports = routes;