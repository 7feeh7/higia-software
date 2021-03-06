const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Group = require('../models/Group');
const Course = require('../models/Course');

const connection = new Sequelize(dbConfig);

User.init(connection);
Group.init(connection);
Course.init(connection);

module.exports = connection;