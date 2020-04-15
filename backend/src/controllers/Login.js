const User = require('../models/User');
const encryptPassword = require('../utils/EncryptPassword');

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: {email} });

        if(encryptPassword.comparePassword(password, user.password)) {
            return res.json(user);
        } else {
            return res.status(401).json({ msg: 'invalid username or password' });
        }
    }, 
}