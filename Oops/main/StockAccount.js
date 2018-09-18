/**
 *  Purpose         : The StockAccount class also maintains a list of CompanyShares object which has
                      Stock Symbol and Number of Shares as well as DateTime of the transaction. When
                       buy or sell is initiated StockAccount checks if CompanyShares are available and
                       accordingly update or create an Object.
 *  @description    
 *  @file           : stockAccount.js
 *  @module         : util.js
 *  @author         : Arghya Ray
*/
var readlinesync = require('readline-sync');
var utility = require('../utility/util.js');

var fs = require('fs');


function stock() {

    
    var a = fs.readFileSync('../json/stockSave.json', 'utf8');
    var arr = JSON.parse(a);
   

    utility.stockSelect(arr, readlinesync);

    
}
stock();