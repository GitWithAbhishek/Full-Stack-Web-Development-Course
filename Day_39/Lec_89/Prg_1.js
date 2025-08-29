const express = require("express");
const app = express();
const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});
app.get("/index", (req, res) => {
    console.log("Index Page Requested");
  res.sendFile("index.html", { root: __dirname });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
