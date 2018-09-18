/**
 *  Purpose         : Merge Sort of list of Strings.
 *  @description    
 *  @file           : mergeString.js
 *  @overview       : Merge Sort of list of Strings.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline = require('readline-sync');
var util=require('../utility/algo-utility.js');

function mergesort()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `) 
        if(isNaN(a)) {
         array.push(a)   
        }else {console.log("invalid input"); return; }
    }
       util.mergesort(array);
       console.log("the sorted array:["+util.mergesort(array)+"]");
      } 
      else console.log("invalid");
      
   }
   mergesort();