/**
 *  Purpose         : Hashing Function to search a Number in a slot
 *  @description    
 *  @file           : hash.js
 *  @overview       : Hashing Function to search a Number in a slot
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/

var utility=require('../utility/dsutil.js');//import utility
var readline=require('readline');//using readline
//creating an interface of readline
var read=readline.createInterface(process.stdin,process.stdout)

function search()
{
    read.question('enter the size of hash table(array)-->',function(len){

        read.question('enter the value to be searched-->',function(val){
          //validation
            if(len<1||val<1||isNaN(len)||isNaN(val)||len==undefined||val==undefined||len==' '||len=='  '||val==' '||val=='  '||len==''||val=='')
            {
                console.log('invalid input!! please give proper array size and number to search')
                process.exit();
            }
            utility.hash_search(val,len);

        })
    })
}
search()