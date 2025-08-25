const express = require("express");
const app = express();
const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});
app.get("/search", (req, res) => {
  const { q, page } = req.query;  // get query parameters
  res.send(`Searching for ${q}, page ${page}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
