const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    jobtitle: { type: String, required: false },
    department: { type: String, required: false },
    companyname: { type: String, required: false },
    companysize: { type: String, required: false },
    country: { type: String, required: false },
    city: { type: String, required: false },
    bio: { type: String, required: false },
    isProfileComplete: { type: Boolean, enum: [true, false], default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
