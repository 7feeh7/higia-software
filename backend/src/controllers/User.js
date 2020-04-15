const User = require('../models/User');
const encryptPassword = require('../utils/EncryptPassword');

module.exports = {
    async get(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users); 
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.json(user);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async save(req, res) {
        const { name, email, password } = req.body;

        try {
            const user = await User.create({ name, email, password: encryptPassword.setPassword(password)});
            return res.json(user);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async update(req, res) {
        const { name, email, password } = req.body;
        
        try {
            const user = await User.findByPk(req.params.id);
            await user.update({ name, email, password: bcrypt.hashSync(password, salt) });
            return res.json(user); 
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }

    },

    async destroy(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            await user.destroy();
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }
};