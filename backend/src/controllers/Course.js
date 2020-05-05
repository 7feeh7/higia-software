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

    },

    async destroy(req, res) {
        
    }
}