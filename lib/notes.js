'use strict';

//Create constructor
function Content(args){
    this.action = args.action;
    this.payload = args.payload;
}

Content.prototype.check = function(args){
    //If there's an argument run console log on line 11, if no argemnet console log "Error"
    if(args){
        console.log(`Action ${args.action}`, `Payload ${args.payload}`);
    }
    
    else{
        console.log('Error');
    }
}

Content.prototype.add = function(args){
    console.log(args.payload);
}

//Exports Content to be used for Values
module.export = Content;
