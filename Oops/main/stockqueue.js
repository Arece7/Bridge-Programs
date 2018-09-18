/**
 *  Purpose         : Further maintain DateTime of the transaction in a Queue implemented using Linked
                       List to indicate when the transactions were done.
 *  @description    
 *  @file           : stockqueue.js
 *  @module         : util.js
 *  @author         : Arghya Ray
*/
var readlinesync = require('readline-sync');

var StockAccountQueue = require('/home/bridgeit/Documents/BRIDGE programs/Oops/implementation/queue.js');

var fs = require('fs');

function stock() {

    var objQue = new StockAccountQueue();
    var a = fs.readFileSync('/home/bridgeit/Documents/BRIDGE programs/Oops/json/stockQueue.json', 'utf8');
    var arr = JSON.parse(a);

    // console.log(arr);


    for (var i = 0; i < arr.length; i++) {

        var t = arr[i].squantity;
        if(t <= 0){
            continue;
        }

        objQue.enqueue(arr[i].sname, arr[i].sprice, arr[i].squantity);

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

                                        objQue.enqueue(cname, cprice, cquantity);

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

                        for (var i = 0; i < objQue.size(); i++) {

                            arr1.push(objQue.get(i));
                        }

                        var a = JSON.stringify(arr1,null,2);
                        fs.writeFileSync('/home/bridgeit/Documents/BRIDGE programs/Oops/json/stockQueue.json', a);

                        console.log(objQue.printList());
                        break;
                    } else {
                        console.log("Invalid Input!!");
                        break;
                    }
                }

            case 2:
                {
                    console.log();
                    console.log(objQue.printList());
                    console.log();
                    
                        var quant = readlinesync.question("Enter the quantity of Share : ");
                        if (!(isNaN(quant))) {
                            var d = objQue.dequeue(quant);
                            console.log(objQue.size())
                            var arr1 = [];

                            for (var i = 0; i < objQue.size(); i++) {

                                var t = objQue.get(i).squantity;
                                if(t <= 0){
                                    continue;
                                }
                            
                                arr1.push(objQue.get(i));
                            }

                            d = arr1;
                            if (d === arr1) {
                                d = arr1;
                            }

                            
                            var a = JSON.stringify(d,null,2);
                            fs.writeFileSync('/home/bridgeit/Documents/BRIDGE programs/Oops/json/stockQueue.json', a);

                            console.log(objQue.printList());
                            console.log("Stack Size : "+ objQue.size())
                            break;
                        } else {
                            console.log("Invalid Input!! ");
                            break;
                        }
                   

                }

            case 3:
                {
                    console.log();
                    console.log(objQue.printList());
                    break;
                }

            default:
                console.log("Invalid option Selection!! ...");
        }
    }

    
}
stock();