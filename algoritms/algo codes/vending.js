/**
 *  Purpose         : Calculate the minimum number of Notes as well as the Notes to be returned
 *                     by the Vending Machine as a Change.
 *  @description    
 *  @file           : vending.js
 *  @overview       : Use Recursion and check for largest value of the Note to return change to get to minimum number of Notes.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');
var utility = require('../utility/algo-utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function calculate()
{ 
         var mNote=0; 
    read.question("Enter the amount u want: ",function(amount)
    {    
        utility.calculateMinNoNote(amount,mNote);
        read.close();
    });
}
calculate();