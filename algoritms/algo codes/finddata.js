/**
 *  Purpose         : Read in a list of words from File. Then prompt the user to enter a word to search the list. The program reports if the search word is found in the list.
 *  @description    
 *  @file           : finddata.js
 *  @overview       : Use Arrays to sort the word list and then do the binary search.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');
var utility = require('../utility/algo-utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function find()
{
    read.question("Enter the searched word: ",function(str){
        if(isNaN(str))
        {
            utility.find(str);
        }
        else
            {
           console.log("Invalid input");
           process.exit();
            }
    });
}
find();