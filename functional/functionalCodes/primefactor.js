/** Purpose         : Computes the prime factorization of N using brute force.
 *  @description    
 *  @file           : primefactor.js
 *  @overview       :Print the prime factors of number n.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});
     function factor()
{
    read.question("enter the nuumber:",function(n)
    {
        util.factor(n);
        read.close();
    }); 
}
factor();