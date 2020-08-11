'use strict';

// requires this file to look at input.js and notes.js in the lib folder
const Input = require('./lib/input.js');
const notes = require('./lib/notes.js');

// Make new object from the constructor in input.js (Keys)
const option = new Input();

// Gets Values from notes.js
notes.fetch(option);
