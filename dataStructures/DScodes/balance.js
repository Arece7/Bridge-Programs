/**
 *  Purpose         : Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
                      performance of operations. Ensure parentheses must appear in a balanced fashion.
 *  @description    
 *  @file           : cashCounter.js
 *  @overview       :Ensure parentheses must appear in a balanced fashion.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');//importing readline
var utility = require('../utility/dsutil.js');//import utility
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout  //creating an interface of readline
});
function parChecker()
{    //read input from console
    read.question("Enter the searched expression: ",function(exp){
        //validation
        
            utility.parChecker(exp);
        
        
         parChecker();
        
           
    });
}
parChecker();