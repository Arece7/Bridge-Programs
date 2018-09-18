/**
 *  Purpose         : Swap nibbles and find the new number & Find the resultant number is the number is a power of 2.
 *  @description    
 *  @file           : bitSwap.js
 *  @overview       : Swap nibbles and find the new number & Find the resultant number is the number is a power of 2.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');
var utility = require('../utility/algo-utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function swap()
{
    read.question("Enter the decimal number: ",function(val){
    utility.swap(read,val);
    
    });

}
swap();