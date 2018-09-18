/**
 *  Purpose         : A palindrome is a string that reads the same forward and backward, for
                    example, radar, toot, and madam. We would like to construct an algorithm to
                    input a string of characters and check whether it is a palindrome.
 *  @description    
 *  @file           : cashCounter.js
 *  @overview       : input a string of characters and check whether it is a palindrome.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');//importing readline
var utility = require('../utility/dsutil.js');// importing utility
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});                    //creating an interface of readline
function palchecker()
{
    read.question("Enter the string u wanna check: ",function(str){
        if(isNaN(str))      //validation
        {
            utility.palchecker(str);
        }
        else
            {
           console.log("Invalid input");
           process.exit();
            }
    });
}
palchecker();