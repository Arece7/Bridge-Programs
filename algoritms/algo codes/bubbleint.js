/**
 *  Purpose         : Reads in integerss prints them in sorted order using Bubble Sort
 *  @description    
 *  @file           : bubbleint.js
 *  @overview       : bubbleSort method for integer.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/

var readline = require('readline-sync');
var util=require('../utility/algo-utility.js');
 
 function bubble()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(var i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `) 
        if(isNaN(a)) {console.log("plz enter integer again"); break;}
        else{
         array.push(a)   
        }
       util.bubble(array);}
       console.log("the sorted array:["+array+"]");
      } 
      else console.log("invalid");
    
   }
   bubble();