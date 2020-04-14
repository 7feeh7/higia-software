const Group = require('../models/Group');

module.exports = {
    async index(req, res) {
        const groups = await Group.findAll();
        return res.json(groups);
    },

    async store(req, res) {
        const { name, description } = req.body;
        
        const group = await Group.create({ name, description });

        return res.json(group);
    }
};