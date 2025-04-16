const instructorModel = require('../models/instructorModel');

// Add a new instructor
const addInstructor = async (req, res) => {
    try {
        const { name, email } = req.body;

        const instructor = new instructorModel({
            name,
            email,
        });

        await instructor.save();

        res.status(201).json({ message: 'Instructor added successfully', instructor });
    } catch (error) {
        console.error('Error adding instructor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all instructors
const getInstructors = async (req, res) => {
    try {
        const instructors = await instructorModel.find();
        res.status(200).json({ instructors });
    } catch (error) {
        console.error('Error fetching instructors:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    addInstructor,
    getInstructors,
};