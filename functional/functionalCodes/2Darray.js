/**
 *  Purpose         : A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output.
 *  @description    
 *  @file           : 2Darray.js
 *  @overview       : create 2 dimensional array in memory to read in M rows and N cols
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/


var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});
     function array()
{
    read.question("enter the row:",function(r)
    {
        read.question("enter the column:",function(c){
        util.array(read,r,c);
       
    }); 
});
}
array();