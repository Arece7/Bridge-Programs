/**
 *  Purpose         : Read in N integers and counts the number of triples that sum to exactly 0.
 *  @description    
 *  @file           : triplet.js
 *  @overview       : One Output is number of distinct triplets as well as the second output is to print the distinct triplets.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});

function findTriplets()
{ 
    read.question("enter the length of the array:",function(value)
    {
     
        util.findTriplets(read,value);
     });
    
}
findTriplets();
