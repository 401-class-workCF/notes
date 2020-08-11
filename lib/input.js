'use strict';

//Used to paress arguments
const mini = require('minimist');

function Input(){
    //Slice first two index positions from array (0, 1)
    const args = mini(process.args.slice(2));

    this.action = this.action(args.m);
    this.payload = this.payload(args.p);
}

Input.prototype.action = function(action = ''){
    //Regex to validate if the action is acceptable
    let validAction = /get|put|patch|post|delete/i;
    console.log(action);

    //Validate if action is accepted if so return action if not default is GET
    return validAction.test(action) ? action : 'GET';
}

Input.prototype.payload = function (payload = ''){
    //Return payload if nothing then return undefined 
    return payload ? payload : undefined;
}

//Exports the function Input to be used as Keys
module.export = Input;
