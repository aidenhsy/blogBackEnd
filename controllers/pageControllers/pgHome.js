const Post = require("../../models/Post");

module.exports = async (req, res) => {
  let posts = await Post.find({});
  res.render("index", { posts });
  console.log(posts);
};
