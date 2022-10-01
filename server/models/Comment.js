const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: "invalid comment!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  thoughtAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
