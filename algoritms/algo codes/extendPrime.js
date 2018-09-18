/**
 *  Purpose         : Program to find the prime numbers that are Anagram and Palindrome
 *  @description    
 *  @file           : extendPrime.js
 *  @overview       : program to find the prime numbers that are Anagram and Palindrome.
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../utility/algo-utility.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});

 function eprime()
     {
        read.question("enter the range u want:",function(num)
        {
            util.eprime(num);
              read.close();
            });
    }
eprime();