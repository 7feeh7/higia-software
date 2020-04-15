const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            user_group_id: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
}

module.exports = User;