const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Model for comments
const commentSchema = new Schema({
  // Comment text format
  commentText: {
    type: String,
    required: "invalid comment!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  // Comment Author format
  commentAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  // Comment date format
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});
// reference for thought
const Comment = model("Comment", commentSchema);
// export Comment
module.exports = Comment;
