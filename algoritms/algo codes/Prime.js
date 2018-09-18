/**
 *  Purpose         : Take a range of 0 to N  Numbers and find the Prime numbers in that range.
 *  @description    
 *  @file           : Prime.js
 *  @overview       : find the Prime numbers
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../utility/algo-utility.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});

 function prime()
     {
        read.question("enter the range u want:",function(num)
        {
            util.prime(num);
              read.close();
            });
    }
prime();