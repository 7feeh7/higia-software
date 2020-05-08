const Course = require('../models/Course');

module.exports = {
    async get(req, res) {
        try {
            const course = await Course.findAll();
            return res.json(course);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }, 

    async getById(req, res) {
        try {
            const course = await Course.findByPk(req.params.id);
            return res.json(course);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }

    },

    async save(req, res) {
        const { name } = req.body;
        try {
            const course = await Course.create({ name });
            return res.json(course);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async update(req, res) {
        try {
            const course = await Course.findByPk(req.params.id);
            await course.update(req.body);
            return res.json(course);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async destroy(req, res) {
        try {
            const course = await Course.findByPk(req.params.id);
            await course.destroy();
            return res.send();
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }
}