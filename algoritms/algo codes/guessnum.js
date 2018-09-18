/**
 *  Purpose         :Question to find your number.
 *  @description    
 *  @file           : guessnum.js
 *  @overview       : takes a command­line argument N, asks you to think of a number.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var num=process.argv[2];
var utility = require('../utility/algo-utility.js')
function guess()
{
    console.log("Follow the instructions given below ")
    utility.guess(num);
}
guess();