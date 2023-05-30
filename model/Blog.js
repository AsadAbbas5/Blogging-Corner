const mongoose = require('mongoose');

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true
  },
  blogContent: {
    type: String,
    equired: true
  },
  blogAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  blogImge:{
    type:sting
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Blog model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
