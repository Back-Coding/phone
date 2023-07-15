
const mongoose = require('mongoose');

// Define the CourseVideo schema
const courseVideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug:{
    type: String,
    unique: true ,
    require :true
  },
  category:{
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course_video',
  },
 date: {
    type: Date,
    default: Date.now
  }
});

// Index the `course` field
courseVideoSchema.index({ course: 1 });

mongoose.models={}
// Create the CourseVideo model
module.exports = mongoose.model('course_video', courseVideoSchema);


