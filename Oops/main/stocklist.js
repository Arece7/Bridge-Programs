/**
 *  Purpose         : Maintain the List of CompanyShares in a Linked List So new CompanyShares can
                      be added or removed easily. Do not use any Collection Library to implement Linked
                       List.
 *  @description    
 *  @file           : stocklist.js
 *  @module         : util.js
 *  @author         : Arghya Ray
*/
var readlinesync = require('readline-sync');

var stockList = require('../implementation/list1.js');

var fs = require('fs');

function stock() {

    var objList = new stockList();
    var a = fs.readFileSync('/home/bridgeit/Documents/BRIDGE programs/Oops/json/stockSave.json', 'utf8');
    var arr = JSON.parse(a);



    for (var i = 0; i < arr.length; i++) {

        objList.buy(arr[i].sname, arr[i].sprice, arr[i].squantity);

    }

    console.log();
    console.log("*********** Welcome to the Stock Market Broker Client 2.0 *************");
    console.log();
    console.log("Please select what you want to do : ")
    console.log();
    console.log("1 : Buy the stock of Company");
    console.log("2 : Sell the stock/share of an existing Company");
    console.log("3 : Display the Account profile ");
    console.log();

    var option = readlinesync.question("Enter 1, 2 or 3 ....");
    if (!(isNaN(option))) {
        switch (parseInt(option)) {

            case 1:
                {
                    var times = readlinesync.question("Enter the Number of company you want to add in the List : ");
                    if (!(isNaN(times))) {
                        console.log();
                        for (var i = 0; i < times; i++) {

                            var cname = readlinesync.question("Enter the company name : ");
                            if (isNaN(cname)) {
                                var cprice = readlinesync.question("Enter the price of single Share : ");
                                if (!(isNaN(cprice))) {
                                    var cquantity = readlinesync.question("Enter the Share quantity : ");
                                    if (!(isNaN(cquantity))) {

                                        objList.buy(cname, cprice, cquantity);

                                    } else {
                                        console.log("Invalid Input!! ");
                                        break;
                                    }
                                } else {
                                    console.log("Invalid Input!! ");
                                    break;
                                }
                            } else {
                                console.log("Invalid Input!! ");
                                break;
                            }
                        }



                        var arr1 = [];

                        for (var i = 0; i < objList.size(); i++) {

                            arr1.push(objList.get(i));
                        }

                        var a = JSON.stringify(arr1,null,2);
                        fs.writeFileSync('/home/bridgeit/Documents/BRIDGE programs/Oops/json/stockSave.json', a);

                        console.log(objList.printList());
                        break;
                    } else {
                        console.log("Invalid Input!!");
                        break;
                    }
                }

            case 2:
                {
                    console.log();
                    console.log(objList.printList());
                    console.log();
                    var del = readlinesync.question("Enter the Stock name to sell : ");
                    if (isNaN(del)) {
                        var quant = readlinesync.question("Enter the quantity of Share : ");
                        if (!(isNaN(quant))) {
                            var d = objList.sell(del, quant);

                            var arr1 = [];

                            for (var i = 0; i < objList.size(); i++) {

                                arr1.push(objList.get(i));
                            }

                            d = arr1;
                            if (d === arr1) {
                                d = arr1;
                            }

                            console.log(objList.printList());
                            var a = JSON.stringify(d,null,2);
                            fs.writeFileSync('/home/bridgeit/Documents/BRIDGE programs/Oops/json/stockSave.json', a);

                            console.log(objList.printList());
                            break;
                        } else {
                            console.log("Invalid Input!! ");
                            break;
                        }
                    } else {
                        console.log("Invalid Input!! ");
                        break;
                    }

                }

            case 3:
                {

                    console.log(objList.printList());
                }

            default:
                console.log("Invalid option Selection!! ...");
        }
    }

    
}
stock();