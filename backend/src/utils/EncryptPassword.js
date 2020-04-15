const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    setPassword(password) {
        return bcrypt.hashSync(password, salt);
    }, 
    comparePassword(password) {
        return bcrypt.compareSync(password, salt);
    }
}