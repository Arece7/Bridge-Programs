/** Purpose         : compute 1/1 + 1/2 + 1/3 + ... + 1/N & print the Nth Harmonic Value.
 *  @description    
 *  @file           : Harmonic.js
 *  @overview       : print the Nth Harmonic Value.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});
    function harmonic()
    {
        read.question("enter the nth value:",function(n)
        {
            util.harmonic(n);
            read.close();
        }); 
    }
    harmonic();


