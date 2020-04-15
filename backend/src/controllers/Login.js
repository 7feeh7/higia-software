require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const encryptPassword = require('../utils/EncryptPassword');

module.exports = {
    async authenticate(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email } });

            if (encryptPassword.comparePassword(password, user.password)) {
                const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: 300
                });
                return res.json({ id: user.id, name: user.name, accessToken: accessToken });
            } else {
                return res.status(401).json({ msg: 'invalid username or password' });
            }
        } catch (error) {
            return res.status(401).json({ msg: 'invalid username or password' });
        }
    },
}