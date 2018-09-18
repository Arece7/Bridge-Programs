/**
 *  Purpose         : sqrt to compute the square root of a nonnegative number given in the input using Newton's method
 *  @description    
 *  @file           : sqrt.js
 *  @overview       :  sqrt to compute the square root of a nonnegative number.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');
var utility = require('../utility/algo-utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function sqrt()
{
    read.question("Enter the number: ",function(value){
    utility.sqrt(value);
    read.close();
    });

}
sqrt();