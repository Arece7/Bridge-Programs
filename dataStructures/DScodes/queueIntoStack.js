/**
 *  Purpose         : Modify the calendar program to store the Queue in two Stacks.
 *  @description    
 *  @file           : queueIntoStack.js
 *  @overview       : Modify the calendar program to store the Queue in two Stacks.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var utility = require('../utility/dsutil.js');
var month=process.argv[2]; // input using coomand line
var year=process.argv[3];
function stackCalender()
{
    try{
        
        if(process.argv[2]>12) throw "Enter within 1-12 for month";
        if(isNaN(month) || isNaN(year)) throw "Enter only number";
        if(month == ""||year=="") throw "Empty";
        if(month==" "||year==" ") throw "Input is empty";
        utility.stackCalender(month,year);
    }
    catch(err){
        console.log(err);
    }
    
}
stackCalender();