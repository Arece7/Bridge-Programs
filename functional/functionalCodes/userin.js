/** Purpose         : Take user Input and replace String Template “Hello <<UserName>>, How are you?”
 * @description
 *  @file           : userin.js
 *  @overview       : Take user Input and replace String Template.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});
function replace()
{
    read.question("enter the username:",function(userinput)
    {
        util.replace(userinput);
        read.close();
    }); 
}
replace();