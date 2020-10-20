'use strict';

const Schema = require('./note-schema');

class CRUD {
  get(str) {
    return str ? Schema.find({ category: str }) : Schema.find({});
  }
  create(obj) {
    const { category, payload } = obj;
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
