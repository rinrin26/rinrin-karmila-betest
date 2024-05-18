const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "Account",
  },
  fullName: { type: String },
  accountNumber: { type: String, unique: true },
  emailAddress: { type: String, unique: true },
  registrationNumber: { type: String, unique: true },
});

module.exports = mongoose.model("UserInfo", userInfoSchema);
