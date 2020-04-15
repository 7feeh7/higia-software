const Group = require('../models/Group');

module.exports = {
    async get(req, res) {
        try {
            const groups = await Group.findAll();
            return res.json(groups);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async getById(req, res) {
        try {
            const group = await Group.findByPk(req.params.id);
            return res.json(group);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async save(req, res) {
        const { name, description } = req.body;
        try {
            const group = await Group.create({ name, description });
            return res.json(group);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async update(req, res) {
        try {
            const group = await Group.findByPk(req.params.id);
            await group.update(req.body);
            return res.json(group);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async destroy(req, res) {
        try {
            const group = await Group.findByPk(req.params.id);
            await group.destroy();
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }
};