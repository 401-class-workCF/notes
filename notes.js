'use strict';

function Content(args){
    this.action = args.action;
    this.payload = args.payload;
}

Text.prototype.execute = function(args){
    if(args){
        console.log(`Action ${args.action}`, `Payload ${args.payload}`);
    }
}

Text.prototype.add = function(args){
    console.log(args.payload);
}

//Exports Content to be used for Values
module.export = Content;
