const express = require('express');
const User = require('./controllers/User');
const Group = require('./controllers/Group');

const routes = express.Router();

routes.get('/users', User.get);
routes.get('/users/:id', User.getById);
routes.post('/users', User.save);


// ROUTE - GROUPS
routes.get('/groups', Group.get);
routes.get('/groups/:id', Group.getById);
routes.post('/groups', Group.save);
routes.put('/groups/:id', Group.update);
routes.delete('/groups/:id', Group.destroy);

module.exports = routes;