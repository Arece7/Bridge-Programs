/** Purpose         : Print the year is a Leap Year or not & ensure it is a 4 digit number.
 *  @file           : leapYear.js
 *  @overview       :Print the year is a Leap Year or not.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/

var readLine=require('readline');
var util=require('../Utility/calculate.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});
    function calc()
    {
        read.question("enter the year:",function(year)
        {
            util.calc(year);
            read.close();
        }); 
    }
    calc();