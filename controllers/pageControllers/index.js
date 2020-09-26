const pgHome = require("./pgHome");
const pgCreatePost = require("./pgCreatePost");
const pgCreateUser = require("./pgCreateUser");
const pgLoginUser = require("./pgLoginUser");

module.exports = {
  pgHome: pgHome,
  pgCreatePost: pgCreatePost,
  pgCreateUser: pgCreateUser,
  pgLoginUser: pgLoginUser,
};
