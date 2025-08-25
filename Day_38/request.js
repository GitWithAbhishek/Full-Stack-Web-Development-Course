
const express = require("express");
const app = express();
const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;  // get route parameter
  res.send(`User ID is ${userId}`);
});




// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
