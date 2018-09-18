/**
 *  Purpose         : ­> Read the Text from a file, split it into words and arrange it as Linked List.
                      Take a user input to search a Word in the List. If the Word is not found then add it
                      to the list, and if it found then remove the word from the List. In the end save the
                      list into a file
 *  @description    
 *  @file           : cashCounter.js
 *  @overview       : Read the Text from a file, split it into words and arrange it as Linked List.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');//importing readline
var utility = require('../utility/dsutil.js');//importing utility 
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});                            //creating an interface of readline
function find()
{
    //reading the i/p from console
    read.question("Enter the searched word: ",function(str){
        if(isNaN(str))  //validation
        {
            utility.find(str);
        }
        else
            {
           console.log("Invalid input plz try with String");
           find();
            }
    });
}
find();