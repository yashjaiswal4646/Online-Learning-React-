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



const deleteInstructor = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedInstructor = await instructorModel.findByIdAndDelete(id);
  
      if (!deletedInstructor) {
        return res.status(404).json({ message: 'Instructor not found' });
      }
  
      res.status(200).json({ message: 'Instructor deleted successfully', deletedInstructor });
    } catch (error) {
      console.error('Error deleting instructor:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };



  const getInstructorById = async (req, res) => {
    try {
      const { id } = req.params;
      const instructor = await instructorModel.findById(id);
  
      if (!instructor) {
        return res.status(404).json({ message: 'Instructor not found' });
      }
  
      res.status(200).json({ instructor });
    } catch (error) {
      console.error('Error fetching instructor:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };




  const updateInstructor = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body; // Only allow updating the name
  
      const updatedInstructor = await instructorModel.findByIdAndUpdate(
        id,
        { name }, // Only update the name field
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
  };
  

module.exports = {
    addInstructor,
    getInstructors,
    deleteInstructor,
    getInstructorById,
    updateInstructor,
};