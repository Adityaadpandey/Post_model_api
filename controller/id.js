const Post = require("../models/Post");

const id = async (req, res) => { 
    const { id } = req.params;
    const post = await Post.findById(id);
    res.send(post);
}

module.exports = id;    