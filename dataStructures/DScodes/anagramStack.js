/**
 *  Purpose         :Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
                      the Linked List and Print the Anagrams in the Reverse Order.
 *  @description    
 *  @file           : anagramQueue.js
 *  @overview       :Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
                      the Linked List and Print the Anagrams in the Reverse Order.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var utility = require('../utility/dsutil.js');//importing utility 

function anagramStack(){
//calling utility functions
    var a1 = utility.primeCheck();
   var a2 =  utility.anagramPrimeCheck(a1); 
   var arr =  utility.anagramStack(a2);
   
   
}
anagramStack();






