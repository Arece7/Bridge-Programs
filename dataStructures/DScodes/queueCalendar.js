/**
 *  Purpose         : Create the Week Object having a list of WeekDay objects each storing
 *                    the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay  
 *                    objects are stored in a Queue implemented using Linked List.
 *  @description    
 *  @file           : queueCalendar.js
 *  @overview       : The WeekDay objects are stored in a Queue implemented using Linked List.
 *  @module         : dsutil.js
 *  @author         : Arghya Ray
*/
var utility = require('../utility/dsutil.js');//importing the utility
var month=process.argv[2];// using command line arguments
var year=process.argv[3];
function queueCalender()
{  //validation
    try{
        
        if(process.argv[2]>12) throw "Enter within 1-12 for month";
        if(isNaN(month) || isNaN(year)) throw "Enter only number";
        if(month==" "||year==" ") throw "Input is empty";
        utility.queueCalender(month,year);
    }
    catch(err){
        console.log(err);
    }
    
}
queueCalender();