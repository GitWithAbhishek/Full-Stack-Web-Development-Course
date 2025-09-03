import mongoose from "mongoose";

// Step 1: Connect to MongoDB
await mongoose.connect("mongodb://127.0.0.1:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("✅ MongoDB connected");

// Step 2: Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Step 3: Create Model
const User = mongoose.model("User", userSchema);

// Step 4: Run inside async function
const run = async () => {
  try {
    // 1️⃣ Create (Insert)
    const user = new User({
      name: "Abhishek",
      email: "abhi@example.com",
      age: 21,
    });

    await user.save();
    console.log("✅ User Created:", user);

    // 2️⃣ Read (Find)
    const users = await User.find();
    console.log("📂 All Users:", users);

    const user1 = await User.findOne({ email: "abhi@example.com" });
    console.log("🔍 Find One:", user1);

    // 3️⃣ Update
    const updatedUser = await User.findOneAndUpdate(
      { email: "abhi@example.com" },   // filter
      { age: 22 },                     // update
      { new: true }                    // return updated doc
    );
    console.log("✏️ Updated User:", updatedUser);

    // 4️⃣ Delete
    const deletedUser = await User.findOneAndDelete({ email: "abhi@example.com" });
    console.log("🗑️ Deleted User:", deletedUser);

    // Final check
    const remainingUsers = await User.find();
    console.log("📂 Remaining Users:", remainingUsers);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    mongoose.connection.close(); // close DB connection
  }
};

run();
