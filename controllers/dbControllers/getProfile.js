const Post = require("../../models/Post");
const User = require("../../models/User");

module.exports = async (req, res) => {
  let posts = await Post.find({});
  let user = await User.findById(req.params.id);
  let userID = req.params.id;
  console.log(userID);
  console.log(user._id);
  res.render("profile", { posts, user, userID });
};
