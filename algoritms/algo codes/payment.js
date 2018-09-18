/**
 *  Purpose         : monthlyPayment that reads in three command­line arguments P, Y, and R 
 *                    and calculates the monthly payments you would have to make over Y years
 *                     to pay off a P principal loan amount at R percent interest compounded monthly.
 *  @description    
 *  @file           : payment.js
 *  @overview       : calculate monthlyPayment that reads in three command­line arguments P, Y, and R
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline= require('readline');
var utility = require('../utility/algo-utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function monthlyPayment()
{
    read.question("Enter the principle amount: ",function(P){
     read.question("Enter the number of year: ", function(Y){
      read.question("Enter the rate percent: ",function(R){
         utility.monthlyPayment(P,Y,R);
         read.close();
      });
     });
    });

}
monthlyPayment();