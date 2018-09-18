/**
 *  Purpose         : Simulate Banking Cash Counter
 *  @description    
 *  @file           : cashCounter.js
 *  @overview       : Simulate Banking Cash Counter
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var read=require('readline-sync');//importing readline sync 
var utility=require('../utility/dsutil.js');//importing utility 

function bank()
{
    var num=read.question('enter the no of person in the queue-->');//reading the i/p from console
    //validation with try catch
    try { if (isNaN(num)) throw "invalid input plz try with integers only"
        utility.bank(read,num);
    } catch (error) {
        console.log(error);
        bank();
    }
    

}
bank();