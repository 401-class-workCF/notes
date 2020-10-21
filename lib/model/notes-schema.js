'use strict';

const mongoose = require('mongoose');

mongoose.Schema({
  category: { type: String, default: 'general', required: true },
  text: { type: String, required: true },
});
module.exports = mongoose.Schema;
// module.exports = mongoose.model('notes', notes);
