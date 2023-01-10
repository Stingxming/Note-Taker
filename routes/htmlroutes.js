const path = require("path");
const router = require("express").Router();
/** NAVIGATION ROUTES BEGINS */

router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
); // GET Route for notes page

/**NAVIGATION ROUTES END */

router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
); // Wildcard route to direct users to a main page

module.exports = router;
