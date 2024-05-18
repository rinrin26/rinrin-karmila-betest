const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountId: {
    type: String,
    required: true,
    // unique: true,
  },
  userName: { type: String, required: true, unique: true,},
  password: { type: String, required: true },
  lastLoginDateTime: { type: Date, default: Date.now },
  userId: { type: String, required: true },
},{ collection: 'accountLogin' });

module.exports = mongoose.model("Account", accountSchema);
