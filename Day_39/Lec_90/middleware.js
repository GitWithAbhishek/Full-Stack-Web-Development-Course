const express = require("express");
const app = express();
const PORT = 3000;

// ✅ Custom middleware
app.use((req, res, next) => {
    console.log("Middleware executed");
  console.log(`Request: ${req.method} ${req.url}`);
  next(); // pass control to next middleware/route
});

// ✅ Home route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page!");
});

// ✅ About route
app.get("/about", (req, res) => {
  res.send("This is About Page!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
