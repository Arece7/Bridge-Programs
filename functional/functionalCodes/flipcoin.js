/** Purpose         : Flip Coin and print percentage of Heads and Tails
 *  @description    
 *  @file           : flipcoin.js
 *  @overview       : Using Random Function to get value between 0 and 1. If < 0.5 then tails or heads
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/

var readLine=require('readline');
var util=require('../Utility/calculate.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});
    function flip()
    {
        read.question("enter the no of times u flip:",function(t)
        {
            util.flip(t);
            read.close();
        }); 
    }
    flip();