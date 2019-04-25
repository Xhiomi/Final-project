const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
  description: String,
  locate: {
    lat: Number,
    long: Number
  },
  image: String,
  contact: String
});

module.exports = mongoose.model('Info', infoSchema);
