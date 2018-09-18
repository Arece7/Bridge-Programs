/**
 *  Purpose         : BinarySearch method for strings & integers.
 *  @description    
 *  @file           : search.js
 *  @overview       :  BinarySearch method for strings & integers.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline = require('readline-sync');
var util=require('../utility/algo-utility.js');
 
 function binarySearch()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `)
      
         array.push(a)  ;
        
        }
    
      var search=readline.question("enter the search :")
      
       util.binarySearch(array,search);
      } 
      else console.log("invalid");
      
   }
   binarySearch();