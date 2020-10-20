'use strict';

function Input() {
  console.log('PROCESS', process.argv);
}

// Input.prototype.add = function (body='No note added.') {
  
// }
// const minimist = require('minimist');

// class Input {

//   constructor() {
//     const args = minimist(process.argv.slice(2));
//     this.command = this.parse(args);
//   }

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

module.exports = Input;




















// //Used to paress arguments
// const mini = require('minimist');

// function Input(){
//   //Slice first two index positions from array (0, 1)
//   const args = mini(process.args.slice(2));

//   this.action = this.action(args.m);
//   this.payload = this.payload(args.p);
// }

// Input.prototype.action = function(action = ''){
//   //Regex to validate if the action is acceptable
//   let validAction = /get|put|patch|post|delete/i;
//   console.log(action);

//   //Validate if action is accepted if so return action if not default is GET
//   return validAction.test(action) ? action : 'GET';
// };

// Input.prototype.payload = function (payload = ''){
//   //Return payload if nothing then return undefined 
//   return payload ? payload : undefined;
// };

// //Exports the function Input to be used as Keys
// module.export = Input;
