/** Purpose         : Find the roots of the equation a*x*x + b*x + c.
 *  @description    
 *  @file           : quardatic.js
 *  @overview       : The equation is x*x, hence there are 2 roots.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});

     function quard()
   {
    read.question("enter the value of a:",function(a)
    {
    read.question("enter the value of b:",function(b)
    {
     read.question("enter the value of c:",function(c)    
    {
        util.quard(a,b,c);
        read.close();
    });
   });
});
}
quard();