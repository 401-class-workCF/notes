#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');

const Input = require('./lib/input');
const Notes = require('./lib/notes');
const url = 'mongodb://localhost:27017/notes';
// const url = 'mongodb://127.0.0.1:27017/notes';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', (_) => {
  console.log('Database connected:', url);
});

db.on('error', (err) => {
  console.error('connection error:', err);
});

const input = new Input();
const notes = new Notes(input);

if ((input.validate())) {
  notes
    .execute(input.command)
    .then(mongoose.disconnect)
    .catch((err) => console.log(err));
} else {
  console.log('Error');
  process.exit();
}

// console.log('working', Input);

// 'use strict';

// function Input() {

// }

// Input.prototype.add = function (body='No note added.') {

// }

// #!/usr/bin/env node
// 'use strict';

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/notesy', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const Input = require('./lib/input.js');
// const Notes = require('./lib/notes.js');

// const input = new Input();
// const notes = new Notes();

// if (input.valid()) {
//   notes.execute(input.command)
//     .then(mongoose.disconnect)
//     .catch(error => console.error(error));
// } else {
//   help();
// }

// function help() {
//   console.error('Error!');
//   process.exit();
// }
