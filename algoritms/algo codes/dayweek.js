/**
 *  Purpose         : dayWeek static function that takes a date as input and prints the day of the week that date falls on.
 *  @description    
 *  @file           : dayweek.js
 *  @overview       : program should take three command­line arguments: m (month), d (day), and y (year).
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var utility = require('../utility/algo-utility.js');
var date=[];
 date=process.argv.slice(2);



function dayOfWeek()
{ 
     utility.dayOfWeek(date);
             
}
dayOfWeek();