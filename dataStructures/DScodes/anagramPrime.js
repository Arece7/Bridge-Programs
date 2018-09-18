/**
 *  Purpose         :Extend the Prime Number Program and store only the numbers in that range that are Anagrams.
 *  @description    
 *  @file           : anagramPrime.js
 *  @overview       : Extend the Prime Number Program and store only the numbers in that range that are
                      Anagrams.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var utility = require('../utility/dsutil.js');//importing utility 


function anagram(){
        //calling utility functions
    var a1 = utility.primeCheck();
   var a2 =  utility.anagramPrimeCheck(a1);
   var arr = utility.anagram2D(a2);
   console.log(arr);
}
anagram();