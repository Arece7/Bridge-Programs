/** Purpose         : Stopwatch Program for measuring the time that elapses between the start and end clicks
 *  @description    
 *  @file           : stopwatch.js
 *  @overview       : measuring the time that elapses between the start and end clicks
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
read=readLine.createInterface({
    input:process.stdin,
    output:process.stdout});
var startTime=0;
function stopwatch()
{
    read.question("enter 1 to start :", (start)=>{
        if (start==1)
        {
         var startTime=util.getCurrentTime();
         read.question("enter 0 to stop :", (stop)=>
         {
           var stopTime=util.getCurrentTime();
           var result=util.getElapsedTime(startTime,stopTime);
           console.log("elapsed time= "+result+"miliseconds");
           read.close();

            });
        }
  });
}
stopwatch();