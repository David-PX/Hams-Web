const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
