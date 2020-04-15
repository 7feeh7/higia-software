const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    async get(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.json(user);
        } catch (error) {
            return res.status(404).send("User not found");
        }

    },

    async save(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.create({ name, email, password: bcrypt.hashSync(password, salt) });
            return res.json(user);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update(req, res) {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password: bcrypt.hashSync(password, salt) });
        return res.json(user);
    },

    async delete(req, res) {

    }
};