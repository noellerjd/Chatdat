const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
// Model for users
const userSchema = new Schema({
  // Username format
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // Email format
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  // Password Format
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // Comment Format
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
// if the user is recognised as new, creates the new user and encrypts the password.
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
// check to see if the password is correct. compares password.
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
// reference for User
const User = model("User", userSchema);
// export User
module.exports = User;
