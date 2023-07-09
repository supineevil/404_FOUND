const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  likes: {
    type: Number,
  },
  numOfComments: {
    type: Number,
  },
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comments",
    },
  ],
  images: {
    type: Array,
    data: Buffer,
    contentType: String,
  },
  status: {
    type: String,
    default: "Queued",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
