import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
  }
};

connectDB();
// Step 1: Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Step 2: Create Model
const User = mongoose.model("User", userSchema);

// Step 3: Create & Save
const newUser = new User({
  name: "Abhishek",
  email: "abhi@example.com",
  age: 21,
});

await newUser.save();
console.log("✅ User Saved:", newUser);
