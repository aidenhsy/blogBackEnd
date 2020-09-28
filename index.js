const express = require("express");
const app = express();
const ejs = require("ejs");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

//Listening port
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Listening on port: ${PORT}`));

//db
mongoose.connect(
  "mongodb+srv://aidenhsy:Bob42802@rest.apiyh.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//custom modules
const pageControllers = require("./controllers/pageControllers");
const dbControllers = require("./controllers/dbControllers");
const customeModules = require("./controllers/customModules");

//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(fileUpload());

//gets
app.get("/", pageControllers.pgHome);
app.get("/post/create", pageControllers.pgCreatePost);
app.get("/auth/login", pageControllers.pgLoginUser);
app.get("/auth/register", pageControllers.pgCreateUser);
app.get("/post/:id", dbControllers.getPost);

//posts
app.post("/post/store", dbControllers.storePost);
app.post("/user/store", dbControllers.storeUser);
app.post("/user/login", customeModules.loginUser);
