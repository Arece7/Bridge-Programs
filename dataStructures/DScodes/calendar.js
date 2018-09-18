/**
 *  Purpose         : A program Calendar.js that takes the month and year as command­line arguments and prints the Calendar of the month. Store the Calendar in an 2D Array,
                     the first dimension the week of the month and the second dimension stores the day
                    of the week.
 *  @description    
 *  @file           : calendar.js
 *  @overview       : Store the Calendar in an 2D Array,the first dimension the week of the 
 *                    month and the second dimension stores the day of the week.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var readlinesync = require('readline-sync');//importing readline sync 
var utility = require('../utility/dsutil.js');//importing utility
function calender(){
    //reading the i/p from console
    var date = readlinesync.question("Enter the Months and Year for Calender in YYYY/MM format : ")
    var d = date.split('/');
    //validation
    if(parseInt(d[0].length) === 4 & (!(isNaN(parseInt(d[0])))) & (!(isNaN(parseInt(d[1])))) & (parseInt(d[1])<=12))
    utility.calender(date);
    else console.log("Invalid Input Format!!...It should be in YYYY/MM format...");
}
calender();