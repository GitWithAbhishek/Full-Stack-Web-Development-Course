import mongoose from "mongoose";

// Step 1: Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Step 2: Create Model
const User = mongoose.model("User", userSchema);
