const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = BlogPost = mongoose.model('blogpost', BlogPostSchema);