const express = require('express');
const instructorModel = require('../models/instructorModel'); // Import the instructor model
const { addInstructor, getInstructors } = require('../controller/instructorController');
const validateInstructor = require('../middleware/validateInstructor');

const router = express.Router();

router.post('/add', validateInstructor, addInstructor);
router.get('/', getInstructors);

// Update an instructor by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        // Find and update the instructor
        const updatedInstructor = await instructorModel.findByIdAndUpdate(
            id,
            { name, email },
            { new: true } // Return the updated document
        );

        if (!updatedInstructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        res.status(200).json({ message: 'Instructor updated successfully', updatedInstructor });
    } catch (error) {
        console.error('Error updating instructor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete an instructor by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the instructor
        const deletedInstructor = await instructorModel.findByIdAndDelete(id);

        if (!deletedInstructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        res.status(200).json({ message: 'Instructor deleted successfully', deletedInstructor });
    } catch (error) {
        console.error('Error deleting instructor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;