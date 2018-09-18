/*
 *  Purpose         :  Reads in integer from standard input and prints them in sorted order & Uses insertion sort.
 *  @description    
 *  @file           : insertionString.js
 *  @overview       : Reads in integer from standard input and prints them in sorted order.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline = require('readline-sync');
var util=require('../utility/algo-utility.js');
 
 function inserint()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `) 
         if(isNaN(a)) {
            console.log("invalid input"); break;}
        else{
         array.push(a)}
            
        }
       util.inserint(array);
       console.log("the sorted array:["+array+"]");
      }
      else console.log("invalid");
      
   }
   inserint();


