var readline = require('readline-sync');
var util=require('../utility/algo-utility.js');
 
 function bubblestr()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(var i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `) 
        if(isNaN(a))
        {
          a=a.trim();
          a=a.toLowerCase();
         array.push(a)   
        }else {console.log("plz enter string again"); break;}
       util.bubblestr(array);}
       console.log("the sorted array:["+array+"]");
      } 
      else console.log("invalid");
    
   }
   bubblestr();