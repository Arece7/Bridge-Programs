/** Purpose         : How many random numbers do you need to generate distinct coupon number? This program simulates this random process.
 *  @description    
 *  @file           : coupon.js
 *  @overview       : repeatedly choose a random number and check whether it's a new one.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});
     
 function coupon()
   {
    read.question("enter the min value:",function(min)
    {
    read.question("enter the max value:",function(max)
    {
        util.coupon(min,max);
        read.close();
    });
    });
   }
coupon();