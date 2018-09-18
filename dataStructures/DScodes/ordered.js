/**
 *  Purpose         : ­ Read a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the
                       lse insert the number in appropriate position.
 *  @description    
 *  @file           : ordered.js
 *  @overview       :  Read a List of Numbers from a file and arrange it ascending Order in a Linked List.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');//importing readline
var utility = require('../utility/dsutil.js');// importing utility
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout    //creating an interface of readline
});
function findnum()
{    //read input from console
    read.question("Enter the searched num: ",function(num){
          //validation
        try { if(isNaN(num)) throw "plz enter number only... "
            utility.findnum(num);
        } catch (error) {
           console.log(error);
           findnum();
            
        }
           
    });
}
findnum();