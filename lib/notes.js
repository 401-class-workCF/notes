'use strict';

const CRUD = require('./model/notes-collection');

class Notes {
  constructor() {}

  async execute(command) {
    switch (command.action) {

    case 'add':
      this.add(command.payload, command.category);
      break;

    case 'list':
      this.list(command.category);
      break;

    case 'delete':
      this.delete(command.payload);
      break;

    default:
      Promise.resolve();
    }
  }

  async add(text, category) {
    const newNote = new CRUD.create({ category, text });

    let saved = await newNote.save();
    console.log(`Note:${text}, Saved`);
    return saved;
  }

  async list(category) {
    const noteList = await CRUD.get(category);
    noteList.forEach(note => {
      console.log(note.text,
        `Category: ${category.category} ID: ${category._id}`);
    });
  }

  async delete(id) {
    await CRUD.delete(id);
    console.log(`Node ${id} deleted.`);
  }
}

module.exports = Notes;
