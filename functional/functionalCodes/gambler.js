/** Purpose         : Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal.
 *  @description    
 *  @file           : gambler.js
 *  @overview       : Play till the gambler is broke or has won & print Number of Wins and Percentage of Win and Loss.
 *  @module         : calculate.js
 *  @author         : Arghya Ray
*/
var readLine=require('readline');
var util=require('../Utility/calculate.js');
 read=readLine.createInterface({
     input:process.stdin,
     output:process.stdout});

     function gamble()
   {
    read.question("enter the value of stake:",function(stake)
    {
    read.question("enter the value of goal:",function(goal)
    {
     read.question("enter the value of trials:",function(trials)    
    {
        util.gamble(stake,goal,trials);
        read.close();
    });
   });
});
}
gamble();
