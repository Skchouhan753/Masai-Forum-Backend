const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      // minLength: [6, "password length should be greadter then 6 character"],
    },
    avatar: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  }
);

const userModel = mongoose.model("User", userSchema);
module.exports = {
  userModel,
};
