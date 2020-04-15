require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const encryptPassword = require('../utils/EncryptPassword');

module.exports = {
    async authenticate(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (user && encryptPassword.comparePassword(password, user.password)) {

            const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '8h'
            });

            return res.json({ id: user.id, name: user.name, email: user.email, group: user.user_group_id, accessToken: accessToken });
        } else {
            return res.status(401).json({ msg: 'Nome de usuário ou senha inválidos.' });
        }
    },
}