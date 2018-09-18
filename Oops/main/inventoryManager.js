/**
 *  Purpose         : JSON Inventory Data Management of Rice, Pulses and Wheats
 *  @description    
 *  @file           : deck.js
 *  @module         : util.js
 *  @author         : Arghya Ray
*/
var utility = require('../utility/util.js');
var readlinesync=require('readline-sync');

function inventory1()
{
   var num=readlinesync.question("Enter the number of stocks: ");
   utility.inventory1(num);
}
inventory1();