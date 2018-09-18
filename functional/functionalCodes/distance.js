/** Purpose         : Takes two user input x and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0).
 *  @description    
 *  @file           : distance.js
 *  @overview       : Using Math.power function to to calculate distance = sqrt(x*x + y*y).
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});

     function distance()
   {
      
    read.question("enter the x coordinate vale:",function(x)
    {
    read.question("enter the y coordinate vale:",function(y)
    {
        util.distance(x,y);
        read.close();
    });
   });
}
distance()