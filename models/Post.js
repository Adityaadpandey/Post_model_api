const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    smalltitle: {
        type: 'string',
        required: true,
    },
    desc: {
        type: 'string',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;