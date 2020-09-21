const express = require("express");
const app = express();
const ejs = require("ejs");
const fileUpload = require("express-fileupload");

//Listening port
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Listening on port: ${PORT}`));

//custom modules
const pageControllers = require("./controllers/pageControllers");

//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(fileUpload());

//gets
app.get("/", pageControllers.pgHome);
app.get("/post/create", pageControllers.pgCreatePost);
app.get("/auth/login", pageControllers.pgLoginUser);
app.get("/auth/register", pageControllers.pgCreateUser);
