/**
 *  Purpose         : Write a static function Binary that outputs the binary (base 2) representation of the decimal number typed as the input.
 *  @description    
 *  @file           : binary.js
 *  @overview       : compute the binary representation of n
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');
var utility = require('../utility/algo-utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function Binary()
{
    read.question("Enter the decimal number: ",function(num){
      utility.Binary(num);
       read.close();
    });

}
Binary()