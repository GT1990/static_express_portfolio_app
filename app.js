const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// Path to static files
app.use("/static", express.static("public"));

// Set view engine to pug templates
app.set("view engine", "pug"); // defaults to views folder

const mainRoutes = require("./routes/index"); // defaults to index.js
app.use(mainRoutes);

// 404 Error Handler
app.use((req, res, next) => {
  const error = new Error(
    "Looks like the page you are looking for has vanished!"
  );
  error.status = 404;
  next(error);
});
// Global Error Handler
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(err.status);
    res.render("page-not-found", { err });
  } else {
    res.status(err.status || 500);
    err.message =
      err.message || "Something went wrong on the server. Please try again.";
    res.render("error", { err });
  }
});

// Port
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
