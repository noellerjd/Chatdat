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
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
