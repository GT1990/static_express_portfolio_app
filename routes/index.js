const express = require("express"); // Add express
const router = express.Router(); // Add express router
// Get data
const data = require("../data.json");
const { projects } = data;

// Home Route
router.get("/", (req, res) => {
  res.render("index", { projects });
});
// About Route
router.get("/about", (req, res) => {
  res.render("about");
});

// Project Route with id
router.get("/project/:id", (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  if (project) {
    res.render("project", { project });
  } else {
    const error = new Error("Project not found. Please try again.");
    error.status = 404;
    throw error;
  }
});
// Project Route without id
router.get("/project/", (req, res) => {
  // Displays a random project instead of throwing an error
  const random = Math.floor(Math.random() * projects.length);
  const project = projects[random];
  res.render("project", { project });
});

module.exports = router;
