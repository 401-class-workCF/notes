'use strict';

const Schema = require('./notes-schema');

class CRUD {
  get(note) {
    return note ? Schema.find({ category: note }) : Schema.find({});
  }
  create(notes) {
    const { category, payload } = notes;
    const note = new Schema({
      category: category,
      text: payload,
    });
    let saved = note.save();
    return saved;
  }
  delete(id) {
    console.log(id);
    return Schema.findOneAndDelete({ _id: id });
  }
  clear() {
    return Schema.deleteMany({});
  }
}

module.exports = new CRUD();
