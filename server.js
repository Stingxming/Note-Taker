const express = require("express");
const path = require("path");
const db = require("./db/db.json");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("./helpers/fsUtils");

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** API ROUTE BEGINS */

app.get("/api/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

/** API ROUTES ENDS */

app.use(express.static("public"));

/** NAVIGATION ROUTES BEGINS */

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
); // ROUTES FOR HOME PAGE

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
); // GET Route for notes page

/**NAVIGATION ROUTES END */

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
); // Wildcard route to direct users to a main page

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
