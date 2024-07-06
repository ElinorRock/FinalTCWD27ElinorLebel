const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  email: String,
  city: String,
});

module.exports = mongoose.model('Member', memberSchema);
