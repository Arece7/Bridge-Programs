/**
 *  Purpose         :Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using the Linked List and Print the Anagrams from the Queue.
 *  @description    
 *  @file           : anagramQueue.js
 *  @overview       :Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using the Linked List and Print the Anagrams from the Queue.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var utility = require('../utility/dsutil.js');//importing utility 

function anagramQueue(){
  //calling utility functions
    var a1 = utility.primeCheck();
   var a2 =  utility.anagramPrimeCheck(a1);
   var arr = utility.anagramQueue(a2);
}
anagramQueue();


