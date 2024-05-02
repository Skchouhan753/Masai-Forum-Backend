const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      maxlength: 100,
      required: true,
    },
    category: {
      type: String,
      enum: ["Development", "Design", "Innovation", "Tutorial", "Business"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    media: {
      type: [String],
      default: [],
    },
    likes: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    comments: {
      type: [
        {
          user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          text: String,
          created_at: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const postModel = mongoose.model("post", postSchema);
module.exports = {
  postModel,
};
