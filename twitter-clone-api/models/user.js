const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

// hashing the password before saving it ---
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified === "password") {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (userPassword, next) {
  try {
    let isMatch = await bcrypt.compare(userPassword, this.password, next);
    return isMatch;
  } catch (err) {
    next(err);
    console.log(err.message);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
