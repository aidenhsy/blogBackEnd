const Post = require("../../models/Post");

module.exports = (req, res) => {
  let post = Post.findById(req.params.id).populate("userid");
  res.render("post", { post });
};
