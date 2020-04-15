const User = require('../models/User');
const encryptPassword = require('../utils/EncryptPassword');

module.exports = {
    async get(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async getById(req, res) {
        const user = await User.findByPk(req.params.id);
        return res.json(user);
    },

    async save(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.create({ name, email, password: encryptPassword.setPassword(password)});
            return res.json(user);
        } catch (error) {
            return res.status(400).json();
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