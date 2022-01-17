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
// Project Route
router.get("/project/:id", (req, res) => {
  const { id } = req.params;
  const project = projects[id];
  res.render("project", { project });
});

module.exports = router;
