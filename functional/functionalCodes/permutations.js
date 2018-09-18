/** Purpose         : Write functions to return all permutation of a String
 *  @description    
 *  @file           : permutations.js
 *  @overview       : All permutation of a String
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/

var readLine=require('readline');
var util=require('../Utility/calculate.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});

  function permute()
  {
      read.question("enter the string: ", function(str)
      {
       util.permute(str);
       read.close();
      });  
    }
      permute();