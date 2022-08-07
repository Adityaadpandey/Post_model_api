const Post = require("../models/Post");

const post = async (req, res) => { 
    const { title, desc,smalltitle } = req.body;
    const post = new Post({  title,smalltitle, desc });
    post.save();
    res.json({ message: "Post Created", post });
}

module.exports = post;