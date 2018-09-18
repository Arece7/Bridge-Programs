/** Purpose         : Taking two user input t and v and prints the wind chill.
 *  @description    
 *  @file           : Windchill.js
 *  @overview       : takes two user input t and v and prints the wind chill.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});

     function windchill()
   {
    read.question("enter the value of temperature:",function(t)
    {
    read.question("enter the value of wind speed:",function(v)
    {
     
        util.windchill(t,v);
        read.close();
    });
   
});
}
windchill();