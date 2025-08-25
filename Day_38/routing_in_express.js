const express = require("express");
const app = express();
const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("Hello from home page");
});
// Route
app.get("/about", (req, res) => {
  res.send("About Page");
});
// Route
app.post("/contact", (req, res) => {
  res.send("Contact Form Submitted");
});
// Route
app.put("/update", (req, res) => {
  res.send("Update Request Received");
});
// Route
app.delete("/delete", (req, res) => {
  res.send("Delete Request Received");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
