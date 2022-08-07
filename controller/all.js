const Post = require("../models/Post");

const all = async (req, res) => {
    const posts = await Post.find().select("-password").select("-__v").select("-date").select("-title").select("-desc")
    // let thingh = posts.reverse()
    res.send(posts.reverse());
}
 
module.exports = all;