/**
 *  Purpose         : Add temperaturConversion static function, given the temperature in fahrenheit 
 *                      as input outputs the temperature in Celsius or viceversa
 *  @description    
 *  @file           :  temp.js
 *  @overview       : Temperature Conversion
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');
var utility = require('../utility/algo-utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function temperature()
{
    read.question("Enter the temperature: ",function(temp){
        read.question("Enter the temperature scale(F for Fahrenheit:/C  for celsius): ",function(value){
         utility.temper(temp,value);
         read.close();
        });
    });
}
temperature();