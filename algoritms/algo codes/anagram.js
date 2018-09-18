/**
 *  Purpose         : Take 2 Strings as Input such abcd and dcba and Check for Anagrams
 *  @description    
 *  @file           : anagram.js
 *  @overview       : The Two Strings are Anagram or not.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../utility/algo-utility.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});

     function anagram()
   {
      
    read.question("enter the 1st string:",function(str1)
    {
    read.question("enter the 2nd string:",function(str2)
    {
        util.anagram(str1,str2);
        read.close();
    });
   });
}
anagram();