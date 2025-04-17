const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Instructor model
    ref: 'Instructor', // Name of the Instructor model
    required: true,
  },
});

const courseModel = mongoose.model('course', courseSchema);

module.exports = courseModel;
