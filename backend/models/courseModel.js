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
  instructorName: {
    type: String,
    required: true,
  },
});

const courseModel = mongoose.model('course', courseSchema);

module.exports = courseModel;
