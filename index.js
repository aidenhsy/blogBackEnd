const express = require("express");
const app = express();
const ejs = require("ejs");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const expressSession = require("express-session");

//Listening port
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Listening on port: ${PORT}`));

//global variables
global.loggedIn = null;

//db
mongoose.connect(
  "mongodb+srv://aidenhsy:Bob42802@rest.apiyh.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//custom modules
const pageControllers = require("./controllers/pageControllers");
const dbControllers = require("./controllers/dbControllers");
const customModules = require("./controllers/customModules");

//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(fileUpload());
app.use(
  expressSession({
    secret: "keyboard cat",
  })
);
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

//gets
app.get("/", pageControllers.pgHome);
app.get("/post/create", pageControllers.pgCreatePost);
app.get("/auth/login", pageControllers.pgLoginUser);
app.get("/auth/register", pageControllers.pgCreateUser);
app.get("/user/logout", customModules.logoutUser);
app.get("/post/:id", dbControllers.getPost);
app.get("/user/:id", dbControllers.getUser);

//posts
app.post("/post/store", dbControllers.storePost);
app.post("/user/store", dbControllers.storeUser);
app.post("/user/login", customModules.loginUser);
