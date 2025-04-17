const Joi = require('joi');
const courseModel = require('../models/courseModel');
const instructorModel = require('../models/instructorModel');

// Define the validation schema
const courseSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  imageUrl: Joi.string().optional(),
  instructorId: Joi.string().required(),
});

const addCourse = async (req, res) => {
  try {
    const { name, price, instructorId } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    const instructor = await instructorModel.findById(instructorId);
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }

    const course = new courseModel({
      name,
      price,
      imageUrl,
      instructor: instructorId,
    });

    await course.save();
    res.status(201).json({ message: 'Course added successfully', course });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCourses = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const courses = await courseModel
      .find()
      .populate('instructor', 'name email')
      .skip((page - 1) * limit)
      .limit(Math.min(parseInt(limit), 50));

    res.status(200).json({ courses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const editCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, instructorId } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

    console.log("Updating course with data:", { name, price, instructorId, imageUrl });

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    if (instructorId) {
      const instructor = await instructorModel.findById(instructorId);
      if (!instructor) {
        return res.status(404).json({ message: 'Instructor not found' });
      }
    }

    const updatedCourse = await courseModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        instructor: instructorId,
        ...(imageUrl && { imageUrl }),
      },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course updated successfully', updatedCourse });
  } catch (error) {
    console.error('Error editing course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await courseModel.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseModel.findById(id).populate('instructor', 'name email');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ course });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addCourse, getCourses, editCourse, deleteCourse, getCourseById };