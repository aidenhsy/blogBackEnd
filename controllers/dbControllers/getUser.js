const User = require("../../models/User");
const Post = require("../../models/Post");

module.exports = async (req, res) => {
  let posts = await Post.find({}).populate("userid");
  let user = await User.findById(req.params.id);
  let userID = req.params.id;
  res.render("user", { user, posts, userID });
};
