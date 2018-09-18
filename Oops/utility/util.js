/**
 *
 * 
 *  Queue using linked list 
 * 
 * 
 */

class NodeLL {              //creating node 
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
}

class Queue1 {

    constructor() {
        this.first = null;
        this.rear = null;
        this.count = 0;
    }

    queue() {

        this.first = new NodeLL(null, null);
        this.rear = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {

        if (this.size() === 0)
            return true
        else return false;
    }

    enqueue(e) {   //for adding the elements

        if (this.first === null) {

            this.first = new NodeLL(e, null);
            this.rear = this.first;
            this.count++;
            return;
        }

        this.rear.next = new NodeLL(e, null);
        this.rear = this.rear.next;
        this.count++;
        
    } 

    dequeue(){       //for removing elements

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;

        return n;

    }

    printList(){           //for printing the queue in console

        if (this.size()===0) return "[]";

        var n = this.first;
        var str = n.ele+" | ";
        while(n.next!== null){

            n = n.next;
            str += n.ele+" | ";
        }
        return str;
        
     }
     front()   // returns the Front element of the queue without removing it.
{
    if(this.isEmpty())
        return "No elements in Queue";
        return this.first.ele;
}
     
}


module.exports={
    /**
     * JSON Inventory Data Management of Rice, Pulses and Wheats
     */
    inventory : function(){
       var fs = require('fs');
      
       var text = fs.readFileSync('../json/inventory.json');
       var obj = JSON.parse(text);//to get the json object
       var total=0,total1=0,total2=0;
       //calculation of inventory
       for(var i=0;i<obj.Rice.Property.length;i++){
            total=total+(obj.Rice.Weight[i]*obj.Rice.Price[i]);
       } 
       for(var j=0;j<obj.Wheat.Property.length;j++){
            total1=total1+(obj.Wheat.Weight[j]*obj.Wheat.Price[j]);
        } 
        for(var k=0;k<obj.Pulses.Property.length;k++){
          total2=total2+(obj.Pulses.Weight[k]*obj.Pulses.Price[k]);  
        } 
        
       console.log("The price of inventory Rice: "+total);
       console.log("The price of inventory Wheat: "+total1);
       console.log("The price of inventory Pulses: "+total2);
    },
    /**
     * Read in the following message: Hello <<name>>, We have your full
name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
Use Regex to replace name, full name, Mobile#, and Date with proper value.
     */
    regex:function(text,name,fullname,mobile,datestr)
    {
        //replacing by regex
        var text=text.replace(/<<name>>/i,name);
        var text=text.replace(/<<full name>>/i,fullname);
        var text=text.replace(/91­xxxxxxxxxx/i,mobile);
        var text=text.replace(/xx\/xx\/xxxx/i,datestr);
        console.log(text);
    },
    /**
     * program to read in Stock Names, Number of Share, Share Price.
Print a Stock Report with total value of each Stock and the total value of Stock.
     */
    stockCalculation : function(n){
        var fs = require('fs');
        var readlinesync=require('readline-sync');//importing readline sync
        var text = fs.readFileSync('../json/manager.json');
        var myObj=JSON.parse(text);
        var price=[];
        var total=0;
        for(var i=0;i<n;i++){
            //getting the input in json objects
            myObj.Stock.StockNames[i]=readlinesync.question("Enter the name of stock: ");
            myObj.Stock.Number_of_shares[i]=readlinesync.question("Enter the number of shares: ");
            myObj.Stock.SharePrice[i]=readlinesync.question("Enter the price of one share (in rupees): ");
            
        }
        for(var j=0;j<n;j++){
            price[j]=myObj.Stock.Number_of_shares[j]*myObj.Stock.SharePrice[j];
        }
        for(var k=0;k<n;k++){
            console.log("Total amount of " + myObj.Stock.StockNames[k] + " is (in rupees) " + price[k]);
            total=total+price[k];
        }
        console.log("The total price of the whole stock (in rupees): "+total);
        var String=JSON.stringify(myObj,null,2);
        fs.writeFileSync('../json/manager.json',String);
        console.log("Saved!!")
        return myObj;
     },
     /**
      * Program DeckOfCards.js , to initialize deck of cards having suit ("Clubs",
   "Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10",
"Jack", "Queen", "King", "Ace").
      */
     deck:function()
     {
         var player1=[];
         var  player2=[];
         var player3=[];
         var player4=[];
         var result=[];
        var SUITS = [ "Clubs", "Diamonds", "Hearts", "Spades" ];
        var RANKS = [ "2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace" ];
         // initialize deck
         var n = SUITS.length * RANKS.length;
         var deck =[];
         for (var i = 0; i < RANKS.length; i++) {
             for (var j = 0; j < SUITS.length; j++) {
                 deck[SUITS.length*i + j] = SUITS[j] + " of " + RANKS[i];
             }
         }
         // shuffle
        for (var i = 0; i < deck.length; i++) {
            var r = i + parseInt( (Math.random() * (n-i)));
            var temp = deck[r];
            deck[r] = deck[i];
            deck[i] = temp;
        }
        //distributing cards
      for(var i=0;i<9;i++)
      {
        player1.push(deck[i]);
      }
       for(var i=9;i<18;i++)
       {
           player2.push(deck[i]);  
       }
       for(var i=18;i<27;i++)
       {
           player3.push(deck[i]);  
       }
       for(var i=27;i<36;i++)
       {
           player4.push(deck[i]);  
       }
       result.push(player1);   //pushing the players in an array
       result.push(player2);
       result.push(player3);
       result.push(player4);
       console.log("The 2D representation of players cards: ")
       console.log(result);
     
     player1=player1.sort();  //sorting the players array
     player2=player2.sort();
     player3=player1.sort();
     player4=player2.sort();
     
     
     var queue=new Queue1;  //creating queue object
     //adding in queue
     for(var i=0;i<9;i++)
     {
        queue.enqueue(player1[i]);  
        
     }
     console.log("Players & their cards pushed in a queue in sorted order :");
     console.log(" ");
     console.log("player 1 cards in sorted order:");
     console.log(queue.printList());
     console.log(" ");
   var queue2=new Queue1;
     for(var i=0;i<9;i++)
     {
        queue2.enqueue(player2[i]);
        
     }
     console.log("player 2 cards in sorted order:");
   console.log(queue2.printList());
   console.log(" ");
   var queue3=new Queue1;
     for(var i=0;i<9;i++)
     {
        queue3.enqueue(player3[i]);
        
     }
     console.log("player 3 cards in sorted order:");
   console.log(queue3.printList());
   console.log(" ");
   var queue4=new Queue1;
     for(var i=0;i<9;i++)
     {
        queue4.enqueue(player4[i]);
        
     }
     console.log("player 4 cards in sorted order:");
     console.log(queue4.printList());
   
    },
    /**
     * Create InventoryManager to manage the Inventory. The Inventory Manager will use InventoryFactory to create Inventory
                      Object from JSON.
     */
    inventory1 : function(num){
        var myObj=this.stockCalculation(num);
        var  manager=new InventoryManager();//creating an object of Inventory manager
        manager.functionCalculate(myObj,num);
        var Str=manager.functionReturn(myObj);
        console.log(Str);
      },
/**
 * The StockAccount class also maintains a list of CompanyShares object which has
   Stock Symbol and Number of Shares as well as DateTime of the transaction.
 */
      stockAccount: function (name) {

        var arr = [];
        var d = new Date(); //creating date object
        objStock.sname = name;
        objStock.sprice = null;
        objStock.squantity = null;
        objStock.dateTime = ((d.getDate()) + "/" + (d.getMonth()) + "/" + (d.getFullYear()));

        arr.push(objStock);
        return arr;
    },

    buyStock: function (name, price, quantity) //method for buying the stock
    {

        var objStock = new StockAcc();
        var d = new Date()
        objStock.sname = name;
        objStock.sprice = price;
        objStock.squantity = quantity;
        objStock.dateTime = (d.getDate()) + "/" + (d.getMonth()) + "/" + (d.getFullYear());

        return objStock;
    },

    sellStock: function (arr, name, quantity) //method for selling the stock
    {
       
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].sname === name) {

                if ((arr[i].squantity) === (quantity)) {

                    arr.splice(i, 1);
                } else {

                    arr[i].squantity = arr[i].squantity - (quantity);
                }
            }


        }
        if (arr[i].sname !== name) {
            console.log("Stock is not in your inventory ..");
        }

        return arr;
    },

    valueOf: function (arr) //total value of stock
    {

        var total = 0;
        for (var i = 0; i < arr.length; i++) {

            var t = parseInt(arr[i].sprice) * parseInt(arr[i].squantity);

            total += t;
        }

        return total;
    },

    saveStock(arr) //for saving transactions
    {
        var fs = require('fs');
        var a = JSON.stringify(arr,null,2);// javascript object to json object
        
        fs.writeFileSync('../json/stockSave.json', a);//writing in json file

    },

    printReport() //printing the report
    {
        var fs = require('fs');

        var read = fs.readFileSync('../json/stockSave.json', 'utf8');//reading the json file

        var arr = JSON.parse(read);//getting the JSON object 

        console.log((arr));
    },
    /**
     * The StockAccount class also maintains a list of CompanyShares object which has
Stock Symbol and Number of Shares as well as DateTime of the transaction. When
buy or sell is initiated StockAccount checks if CompanyShares are available and
accordingly update or create an Object.
     */

    stockSelect: function (arr, readlinesync) {

        console.log();
        console.log("*********** Welcome to the Stock Market  *************");
        console.log();
        console.log("Please select what you want to do : ")
        console.log();
        console.log("1 : Buy the stock of Company");
        console.log("2 : Sell the stock/share of an existing Company");
        console.log("3 : To view the total balance of your account");
        console.log("4 : To Print detail report of the accout");

        console.log();

        var option = readlinesync.question("Enter ur option: 1, 2, 3 ,4 : ");
        if (!(isNaN(option))) {
            console.log();

            switch (parseInt(option)) {

                case 1:
                    {
                        var n = readlinesync.question("Enter the Number of Company Share you want to buy : ");
                        if (!(isNaN(n))) {
                            console.log();
                            for (var i = 0; i < n; i++) {

                                var cname = readlinesync.question("Enter the company name : ");
                                if (isNaN(cname)) {
                                    var cprice = readlinesync.question("Enter the price of a Share : ");
                                    if (!(isNaN(cprice))) {
                                        var cquantity = readlinesync.question("Enter the Share quantity : ");
                                        if (!(isNaN(cquantity))) {

                                            var s = this.buyStock(cname, cprice, cquantity);
                                            arr.push(s);
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
                            this.saveStock(arr);
                            this.printReport();
                            break;
                        } else {
                            console.log("Invalid Input!!");
                            break;
                        }

                    }

                case 2:
                    {
                        console.log();
                        console.log(arr);
                        console.log();
                        var del = readlinesync.question("Enter the Stock name to sell : ");
                        if (isNaN(del)) {
                            var qd = readlinesync.question("Enter the quantity of Share : ");
                            if (!(isNaN(qd))) {
                                var d = this.sellStock(arr, del, qd);
                                if (d === arr) {
                                    d = arr;
                                }
                                this.saveStock(d);
                                this.printReport();
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
                        var total = this.valueOf(arr);
                        console.log("The total value of the account : " + total);
                        console.log();
                        break;
                    }

                case 4:
                    {
                        this.printReport();
                        break;
                    }

                default:
                    {
                        console.log("Invalid Option input!!..");

                    }
            }

        } else {
            console.log("Invalid Input!! ");
        }
    },
    /**
 * @description Creates the readline object.
 * @returns the readline object
 */
    userInput:function() 
    {   
     var readline=require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return rl;
    },
      /**
 * @description Writing array of object in a json file
 */
write:function(fileName, array)
{   var fs = require("fs");
   var json = JSON.stringify(array,null,2);
   fs.writeFile(fileName, json, function (err) {
       if (err) throw err;
       console.log('Saved');
   });
},
/**
 * @description Reading data from the given json file 
 *  
 */
read:function (fileName) {
    var fs = require("fs");
    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}




     
}
//class of inventory manager
class InventoryManager
{
    functionCalculate(myObj,num) 
    {
        var price=[],price1=[];
        var total=0,total1=0;
        for(var j=0;j<num;j++)
        {
            price[j]=myObj.Stock.Number_of_shares[j]*myObj.Stock.SharePrice[j];
            
            
        }
        for(var k=0;k<num;k++){
            console.log("Total amount of each inventory " + myObj.Stock.StockNames[k] + " is (in rupees) " + price[k]);
          
            
            total=total+price[k];
           
           
        }
       
        console.log("The total price of the whole stock (in rupees): "+total);
        
         
        
    }
    functionReturn(myObj){
      var String = JSON.stringify(myObj,null,2);
      return String;


    }

}
//class of stockAccount
class StockAcc{

    constructor(){
    
        this.sname = null;
        this.sprice = 0;
        this.squantity = 0
        this.dateTime = null;
    }
    };
   
 



