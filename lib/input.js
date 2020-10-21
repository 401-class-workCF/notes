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

    const category = args.c || args.category;
    const arg = Object.keys(args).filter((arg) => argsMap[arg])[0];
    // at this point 'Object.keys(args).filter(arg => argsMap[arg])[0]' in terminal:
    // log returns command if it is in argsMap and undefined if not (validating command step one)
    console.log('arg', arg);

    const command = {
      action: argsMap[arg],
      payload: args[arg],
      category: category,
    };

    // if (command.action === undefined || command.payload === true) {
    //   console.log('sad');
    // } else {
    //   console.log('good', command.payload);
    // }

    return command;
  }

  validate() {
    const actions = !this.command.action;
    const payloads = !this.command.payloads;

    if (
      !actions ||
      (actions == 'add' && !payloads) ||
      (actions == 'delete' && !payloads)
    ) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Input;
