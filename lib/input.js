'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
    // at this point '(process.argv.slice(2))' in terminal:
    // nothing output -> { _: [] }
    // a b c output -> { _: ['a', 'b', 'c'] }
    // --a --b --c or -a -b -c output -> { _: [], a: true, b: true, c: true }
    // -a foo --b bar output -> { _: [], a: 'foo', b: 'bar' }

    // THIS IS THE LONG WAY NOW USING PARSE
    // if ('add' in args || 'a' in args) {
    //   if (args('add') !== true || args('a') !== true) {
    //     console.log('add working');
    //   }
    // }
  }

  parse(args) {
    const argsMap = {
      a: 'add',
      add: 'add',
      list: 'list',
      l: 'list',
      d: 'delete',
      delete: 'delete',
    };

    const arg = Object.keys(args).filter((arg) => argsMap[arg])[0];
    // at this point 'Object.keys(args).filter(arg => argsMap[arg])[0]' in terminal:
    // log returns command if it is in argsMap and undefined if not (validating command step one)
    console.log('arg', arg);

    const command = {
      action: argsMap[arg],
      payload: args[arg],
    };

    if (command.action === undefined || command.payload === true) {
      console.log('sad');
    } else {
      console.log('good', command.payload);
    }

    return command;
  }

  validate() {
    return !!(this.command.action && this.command.payload);
  }
}

module.exports = Input;

//   parse(args) {

//     const argsMap = {
//       a: 'add',
//       add: 'add',
//       list: 'list',
//       l: 'list',
//       d: 'delete',
//       delete: 'delete',
//     };

//     const theSwitch = Object.keys(args).find(key => argsMap[key]);

//     const category = args.c || args.category;

//     const action = argsMap[theSwitch];

//     const payload = typeof args[theSwitch] === 'string' ? args[theSwitch] : undefined;

//     return {
//       action, // same as action:action
//       payload, // same as payload:payload
//       category, // same as category: category
//     };
//   }

//   valid() {
//     // command must have an action
//     // add should have payload
//     // delete should have payload
//     // list does not need a payload

//     if (!this.command.action) { return false; }
//     if (this.command.action == 'add') {
//       if (!this.command.payload) {
//         return false;
//       }
//     }
//     if (this.command.action == 'delete') {
//       if (!this.command.payload) {
//         return false;
//       }
//     }

//     return true;

//   }
// }
