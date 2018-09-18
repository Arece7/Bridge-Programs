/**
 * 
 * 
 * 
 * linklist Implementation
 * 
 * 
 * 
 * 
 */
    class Node {              //creating node
        // constructor
        constructor(element)
        {
            this.element = element;
            this.next = null
        }
    }
    class LinkedList {         //linked list implementation
        constructor()
        {
            this.head = null;
            this.size = 0;
        }
        // adds an element at the end
    // of list
        add(element)
    {
        // creates a new node
        var node = new Node(element);
     
        // to store current node
        var current;
     
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
     
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
     
            // add node
            current.next = node;
        }
        this.size++;
    }
    //insert element at the position index
    // of the list
    insertAt(element, index)
    {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
     
            curr = this.head;
     
            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
     
                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
     
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    // removes an element from the
    // specified location
    removeFrom(index)
    {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
     
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
     
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
     
            // return the remove element
            return curr.element;
        }
    }
    //removes a given element from the
    // list
    removeElement(element)
    {
        var current = this.head;
        var prev = null;
     
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    // finds the index of element
    indexOf(element)
    {
        var count = 0;
        var current = this.head;
     
        // iterae over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
     
        // not found
        return -1;
    }
    // checks the list for empty
    isEmpty()
    {
        return this.size == 0;
    }
    // gives the size of the list
    size_of_list()
    {
        return this.size;
    }
    // prints the list items
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        //console.log(str);
        return str;
    }
    search(element)
    {
        var current = this.head;    //Initialize current
        while (current != null)
        {
            if (current.element === element)
                return true;      //data found
            current = current.next;
        }
        return false;    //data not found
    }
     get(index)
     {
         if(index>= this.size)
         return false;
         var current=this.head;
         for(var i=0;i<index;i++)
         {
             current=current.next;//traversing node
         }
         return current.element;
     }

/**
 * 
 * 
 * order list methods implementation
 * 
 * 
 * 
 */
OLsearch(element)
{
    var current = this.head;
     var found = false;
      var stop = false;
    while (current !== null && found ==false && stop ==false)//iterate all elements
    {
        if (current.element== element)
            found = true;
        else{ 
            if( current.element > element)//comparing the elements of list
                stop = true;
            else
                current = current.next;
            }
        }
    return found;
}
OLadd(element)
{

                //creats a node.
                var node1=new Node(element);
                //to store current node.
                var current=this.head;
                //to store previous node.
                var previous=null;
                //to stop traversing.
                var stop=false;
                while(current!==null && stop==false) //condition for traversing the node.
                  {
                       if(current.element>element) //comparing elements
                       stop = true;
                       else
                       {
                        previous=current;
                        current=current.next;
                       } 
                  }
                  var temp = node1;
                  if (previous==null)
                  {
                      temp.next=this.head;
                      this.head=temp;
                  }
                  else
                  {
                      temp.next=current;
                      previous.next=temp;
                  }    
            }
    }
/**
 * 
 * 
 * stack Implementation
 * 
 * 
 */
// Stack class
class Stack {
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
    //push function
    push(element)
    {
        // push element into the items
        this.items.push(element);
    }
    // pop function
    pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
// pop function
pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
// isEmpty function
isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
// printStack function
printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}
/**
 * 
 * Queue Implementation with the help of array
 * 
 * 
 * */
class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
    // enqueue function
enqueue(element)
{    
    // adding element to the queue
    this.items.push(element);
}
// dequeue function
dequeue()
{
    // removing element from the queue
    // returns underflow when called 
    // on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}
// front function
front()
{
    // returns the Front element of 
    // the queue without removing it.
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}
// isEmpty function
isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}
// printQueue function
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
size()
{
    return this.items.length; 
}

}
/**
 * 
 * deque implementation
 * 
 * 
 *  */
class DeQueue
{
    // Array is used to implement a DeQueue
    constructor()
    {
        this.items = [];
    }
    isEmpty(){
	        return this.items.length ==0;
    }
    addFront(element){
        this.items.push(element);
    }
    addRear(element){
        this.items.unshift(element);
    }
    removeFront(){
        return this.items.pop();
    }
    removeRear(){
        return this.items.shift();
    }
    size(){
        return this.items.length;
    }

}

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
        var str = n.ele+" ";
        while(n.next!== null){

            n = n.next;
            str += n.ele+" ";
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

/**
 * 
 * 
 * stack using linked list
 * 
 * 
 */

class Stack1 {

    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0;
    }

    stack() {

        this.first = new NodeLL(null, null);
        this.last = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {

        if (this.size() === 0)
            return -1
        else return 1;
    }

    pop() {                   //for removing the elements 

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;
        return n;
    }

    push(e) {              //for adding the elements


        this.first = new NodeLL(e, this.first);
        this.count++;

    }

    peek(){              //return the first elements

        if(this.first === null) return null;

        return this.first.ele;
    }

    printList(){            //for printing the stack

        if (this.size()===0) return "[]";

        var n = this.first;
        var str = n.ele+" ";
        while(n.next!== null){

            n = n.next;
            str += n.ele+" ";
        }
        return str;
        
     }

}



module.exports = {
    /**
     *  Read the Text from a file, split it into words and arrange it as Linked List.
     Take a user input to search a Word in the List. If the Word is not found then add it
     to the list, and if it found then remove the word from the List. In the end save the
     list into a file
     */
    find:function(str){
        var fs = require('fs');
       var text = fs.readFileSync('text.txt','utf8');//used to read the file.
          var arr=text.split(" "); //splits each string from the separator.
          var ll = new LinkedList();
          for(var i=0;i<arr.length;i++)
          {
           ll.add(arr[i]);       //adding elements to the linked list 
          }
          if(ll.search(str))           //for searching the elements in list
          {
              console.log("data found");
              ll.removeElement(str);
              console.log("after removing the data:"); 
              console.log(ll.printList());
               
          }
          else
          {
              console.log("data not found");
             ll.add(str);
             console.log("after adding the data:");
             console.log(ll.printList());
               
          }
          //for saving the changes in a file
         var string=ll.printList();
         fs.truncate('text.txt', 0, function(){console.log('old contents deleted')})
         fs.appendFile('text.txt',string.trim(), function (err) {
            if (err) throw err;
            console.log('new contents Saved!');
         });

         
        },
        /**
         * Read a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the
         *  insert the number in appropriate position.
         */
        findnum:function(num){
            var fs = require('fs');
           var text = fs.readFileSync('num1.txt','utf8');//used to read the file.
              var arr=text.split(" "); //splits each string from the separator.
              var ll = new LinkedList();
              for(var i=0;i<arr.length;i++)
              {
               ll.add(arr[i]);     //adding elements to the linked list 
              }
              if(ll.OLsearch(num))     //for searching the elements in list
              {
                  console.log("data found");
                  ll.removeElement(num);
                  console.log("after removing the data:"); 
                  console.log(ll.printList());
                   
              }
              else
              {
                  console.log("data not found");
                 ll.OLadd(num);
                 console.log("after adding the data:");
                 console.log(ll.printList());
                   
              }
             var string=ll.printList();
             console.log(string)
             var write=fs.writeFileSync('num1.txt',string.trim());//for saving the changes in a file
              console.log('new contents Saved!');
            },
            /**
             *  
             *
             *  Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
                performance of operations. Ensure parentheses must appear in a balanced fashion.
             
                */
            parChecker:function(exp){
            var stack= new Stack();  //creating an object of stack
            var balanced = true;
            var index = 0;
            var arr=exp.split("");// for spliting & storing it in an array
         while (index < arr.length && balanced==true)//for iteration
             { 
                 var symbol = arr[index];
                if (arr[index] == "(")       //for checking the open paranthesis
                    stack.push(arr[index]);
                else{
                    if (stack.isEmpty())
                        balanced = false;}
                    if(arr[index] == ")")   //for checking the open paranthesis
                        stack.pop();
                
                index++; 
            }
            if(balanced==true && stack.isEmpty())
               { console.log("balanced");
                }
                
            else
                {console.log("not balanced");
                }
                

            },
            /**
             * Simulate Banking Cash Counter
             */
            bank:function(read,num)
            {
                
                var queue=new Queue();// creating an new object of queue
            var total_bal=10000; // take a limited balance for cash counter
            
            for(var i=0;i<num;i++) 
            {
            queue.enqueue(i);  
            }
            count=1;// for counting persons
            while(queue.size())
            {
                var option=read.question('enter 1 to withdraw cash\nenter 2 to deposit cash\n')
            
                if(option==1)
                {    console.log(`the ${(count)} person enter`);
                
                    var with_amount=read.question('\nplease enter the ammount to withdraw:');
                    if(total_bal>=with_amount){
                    total_bal=(total_bal-with_amount); 
                    console.log(`the ${(count)} person exit`);
                    count++;
                }
                    else
                    {
                    console.log('\nOOPS....not enough money to provide')
                    process.exit();

                    }
                }
                else if(option==2)
                {   console.log(`the ${(count)} person enter`);
                    var depo_amount=read.question('\nplease enter the amount to deposit:')
                    
                    total_bal=(total_bal+depo_amount);
                    
                    console.log(`the ${(count)} person exit`);
                    count++;
                    
                }
                else 
                console.log('\n\n It is not a valid attempt.')
                queue.dequeue();
            }
            },  
 /** 
  * A palindrome is a string that reads the same forward and backward, for
    example, radar, toot, and madam. We would like to construct an algorithm to
    input a string of characters and check whether it is a palindrome.
  */                
 palchecker:function(str)
 {
     var dequeue=new DeQueue();  //creating an object of deque
     var arr=str.split(""); //for spliting and storing in an array
     for(var i=0;i<arr.length;i++)
     {
      dequeue.addRear(arr[i]);// adding elements to rear
     }
     stillEqual = true;
     while (dequeue.size() > 1 && stillEqual==true)
     {
         first = dequeue.removeFront();
         last = dequeue.removeRear();
         if (first != last)      //comparing front & rear elements 
         {
             stillEqual = false;
             console.log("it is not a pallindrome");
             
         }
     }
     if (stillEqual==true) console.log("it is a pallindrome");
     
 },

 findnumHash:function(num){
    var fs = require('fs');
   var text = fs.readFileSync('hash.txt','utf8');//used to read the file.
      var arr=text.split(" "); //splits each string & store in an array.
      var arr1=[];
      for(i=0;i<11;i++)
      {
          var obj=new LinkedList();
          arr1.push(obj);
      }
      for(i=0;i<arr.legth;i++)
      {
          var index=parseInt(arr[i]%11);
      }
      
    },
    /** 
     * 
     * 
     * Store the prime numbers in a 2D Array, the first dimension represents the range 0­-100,
   100-­200, and so on.
   
   */
    prime2D : function () 
    {
        var flag, i, prime = [], arr = [], array = [], arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [];

        for (i = 0; i < 1000; i++)      //outer for loop starts
        {
            flag = 1;
            for (var j = 2; j <= i / 2; j++)   //inner for loop starts 
            {
                if (i % j === 0) {        //for checking prime numbers 
                    flag = 0;
                    break;
                }
            }       //inner for loop ends
            if (flag === 1) {
                prime.push(i);             //pushing primes in array
            }
        }
        //for printing 0-1000 prime numbers
        var str = "";
        for (var x = 0; x < prime.length; x++) {
            if (prime[x] > 0 && prime[x] <= 100) {
                str = prime[x] + " ";
                arr.push(str);
                str = "";
            }
            if (prime[x] > 100 && prime[x] <= 200) {
                str = " " + prime[x] + " ";
                arr1.push(str);
                str = "";
            }
            if (prime[x] > 200 && prime[x] <= 300) {
                str = " " + prime[x] + " ";
                arr2.push(str);
                str = "";
            }
            if (prime[x] > 300 && prime[x] <= 400) {
                str = " " + prime[x] + " ";
                arr3.push(str);
                str = "";
            }
            if (prime[x] > 400 && prime[x] <= 500) {
                str = " " + prime[x] + " ";
                arr4.push(str);
                str = "";
            }
            if (prime[x] > 500 && prime[x] <= 600) {
                str = " " + prime[x] + " ";
                arr5.push(str);
                str = "";
            }
            if (prime[x] > 600 && prime[x] <= 700) {
                str = " " + prime[x] + " ";
                arr6.push(str);
                str = "";
            }
            if (prime[x] > 700 && prime[x] <= 800) {
                str = " " + prime[x] + " ";
                arr7.push(str);
                str = "";
            }
            if (prime[x] > 800 && prime[x] <= 900) {
                str = " " + prime[x] + " ";
                arr8.push(str);
                str = "";
            }
            if (prime[x] > 900 && prime[x] <= 1000) {
                str = " " + prime[x] + " ";
                arr9.push(str);
                str = "";
            }

        }
        array.push(arr);
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        console.log("[0-100: " + array[0] + '\n' + "100-200: " + array[1] + '\n' + "200-300: " + array[2] + '\n' + "300-400: " + array[3] + '\n' + "400-500: " + array[4] + '\n' + "500-600: " + array[5] + '\n' + "600-700: " + array[6] + '\n' + "700-800: " + array[7] + '\n' + "800-900: " + array[8] + '\n' + "900-1000: " + array[9] + "]");
        
    },

    primeCheck: function () {

        var arr = [];
        for (var j = 0; j < 1000; j++) {

            var flag = false;
            for (var k = 2; k <= j / 2; k++) {

                if (j % k === 0) {
                    flag = true;
                }

            }
            if (flag === false) 
            { 
                arr.push(j);
            }
        }
        return arr;

    },
/**
 * Extend the Prime Number Program and store only the numbers in that range that are
   Anagrams.
 */
    anagramPrimeCheck: function (arr) {


        var a1 = [];

        for (var i = 0; i <= arr.length - 1; i++) { // for iteration
            for (var j = i + 1; j <= arr.length; j++) { //i+1 to avoid the avoid comparision with number it self
                var s1 = '' + parseInt(arr[i]); //converting each element into string  
                var s2 = '' + parseInt(arr[j]);
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join())) { //check for anagram

                
                    a1.push(parseInt(s1));
                    a1.push(parseInt(s2)); //pushing all anagram element into an array
                }


            }
        }
        return a1;

    },

    anagram2D: function (a1) {

        var a2 = this.primeCheck();
        var array = [];

        for (var i = 0; i < a2.length; i++) {
            for (var j = 0; j < a1.length; j++) {

                if (a2[i] === a1[j]) //comparing the elements 
                {
                     a2.splice(i, 1);
                }
            }
        }
        array.push(a1);
        array.push(a2);

        return array;


    },
   /**Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
     the Linked List and Print the Anagrams in the Reverse Order. */
    anagramStack: function (a2) {

        var objstack = new Stack1();// creating an object of stack

        for (var i = 0; i < a2.length; i++) {

            objstack.push(a2[i]);// pushing the elements
        }

        console.log(objstack.printList());
    },
   /**
    * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using
    the Linked List and Print the Anagrams from the Queue.
    */
    anagramQueue: function (a2) {

        var objqueue = new Queue1();// creating an object of queue

        for (var i = 0; i < a2.length; i++) {

            objqueue.enqueue(a2[i]); // adding elements
        }

        console.log(objqueue.printList()); 
    },
    calender :function(date){
    
    
    var arr = date.split('/');
    var date = date+"/1"; 
    
    var objdate = new Date(date);  //creating objects of date function
    var nOfDays = new Date(objdate.getFullYear(), objdate.getMonth()+1, 0).getDate();//counting no of days
    var weekday = objdate.getDay();
    console.log(" ");

    // for printing the header of the calendar
    console.log("-----------------------------------------------------");
    switch(parseInt(arr[1])){

        case 1 : console.log("                  January"+", "+arr[0]);break;

        case 2 : console.log("                  February"+", "+arr[0]);break;

        case 3 : console.log("                  March"+", "+arr[0]);break;

        case 4 : console.log("                  April"+", "+arr[0]);break;

        case 5 : console.log("                  May"+", "+arr[0]);break;

        case 6 : console.log("                  June"+", "+arr[0]);break;

        case 7 : console.log("                  July"+", "+arr[0]);break;

        case 8 : console.log("                  August"+", "+arr[0]);break;

        case 9 : console.log("                  September"+", "+arr[0]);break;

        case 10 : console.log("                  October"+", "+arr[0]);break;

        case 11 : console.log("                  November"+", "+arr[0]);break;

        case 12 : console.log("                  December"+", "+arr[0]);break;

        default : console.log(" ");
    }
    

    this.calenderPrint(weekday,nOfDays);

},

calenderPrint : function(weekday,nOfDays)
{

    var a1 = ["SUN","MON","TUE","WED","THU","FRI","SAT"];//taking an array for 1st row
    var a2 = [];//taking an array for 2nd row
    var a3 = [];//taking an array for rest 
   
    var n=1;
   
    //for printing spaces & no in 1st row
    for(var i=0; i<7; i++){

        if(i<weekday){

            a2.push(' ');
        }else{
            a2.push(n);
            n++;
        }

    }
// for printing the rest
    for(var i=n; i<=42; i++,n++)
    {
        if(n<=nOfDays){

            a3.push(n);
            
        }
        else{
            a3.push(' ');
        }
    }

    if(a3[28]===null)
    {
        for(var i=0; i<7; i++){
            a3.push(' ');
        }
    }
    
   //prnting format for console
    console.log('\n'+
    '------------------------------------------------------'+'\n'+
    ' '+a1[0]+"\t"+a1[1]+"\t"+a1[2]+"\t"+a1[3]+"\t"+a1[4]+"\t"+a1[5]+"\t"+a1[6]+' '+'\n'+'\n'+
    ' '+a2[0]+"\t"+a2[1]+"\t"+a2[2]+"\t"+a2[3]+"\t"+a2[4]+"\t"+a2[5]+"\t"+a2[6]+'  '+'\n'+
    ' '+a3[0]+"\t"+a3[1]+"\t"+a3[2]+"\t"+a3[3]+"\t"+a3[4]+"\t"+a3[5]+"\t"+a3[6]+'  '+'\n'+
    ' '+a3[7]+"\t"+a3[8]+"\t"+a3[9]+"\t"+a3[10]+"\t"+a3[11]+"\t"+a3[12]+"\t"+a3[13]+'  '+'\n'+
    ' '+a3[14]+"\t"+a3[15]+"\t"+a3[16]+"\t"+a3[17]+"\t"+a3[18]+"\t"+a3[19]+"\t"+a3[20]+'  '+'\n'+
    ' '+a3[21]+"\t"+a3[22]+"\t"+a3[23]+"\t"+a3[24]+"\t"+a3[25]+"\t"+a3[26]+"\t"+a3[27]+' '+'\n'+
    ' '+a3[28]+"\t"+a3[29]+"\t"+a3[30]+"\t"+a3[31]+"\t"+a3[32]+"\t"+a3[33]+"\t"+a3[34]+'  '+'\n');

    
},
/**
 * Create the Week Object having a list of WeekDay objects each storing
 * the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay  
 * objects are stored in a Queue implemented using Linked List.
 */
queueCalender : function(month,year){
    var numberOfDays = new Date(year, month, 0).getDate();// counting no of days
    var dateObj=new Date(); //creating a date object
    dateObj.setFullYear(year); //setting year with the help of date object
    dateObj.setMonth(month-1);//setting month with the help of date object
    dateObj.setDate(1);//set the date to the 1 st day
    var day=dateObj.getDay();
    var queue=new Queue1();//creating a queue object
    queue.enqueue("SUN");
    queue.enqueue("MON");
    queue.enqueue("TUE");
    queue.enqueue("WED");
    queue.enqueue("THU");
    queue.enqueue("FRI");
    queue.enqueue("SAT");
    //pushing the spaces into queue
    switch(day)
    {
        case 0: 
        break;
        case 1: queue.enqueue(" ");
        break;
        case 2: queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 3: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 4: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 5: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 6: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
    }
    //adding numbers into queue
    for(var i=1;i<=numberOfDays;i++){
        
        queue.enqueue(i); 
        
    }
    //for printing the calendar with the help of queue
    var string="";
    var string1="";           //for each row taking a string
    var string2="";
    var string3="";
    var string4="";
    var string5="";
    for(var j=0;j<7;j++){
      var n=queue.front();// taking the front element in n 
      queue.dequeue();//remove it from queue
      string=string+n+" ";// store the elements in a string
    }
    console.log(string);
    for(var j=0;j<7;j++){
        var n=queue.front();
        queue.dequeue();
        string1=string1+" "+n+"  ";
      }
      console.log(string1);
      for(var j=0;j<7;j++){
        var n=queue.front();
        queue.dequeue();
        if(n<10)
        string2=string2+" "+n+"  ";
        else
        string2=string2+" "+n+" ";

      }
      console.log(string2);
      for(var j=0;j<7;j++){
        var n=queue.front();
        queue.dequeue();
        if(n<10)
        string3=string3+" "+n+"  ";
        else
        string3=string3+" "+n+" ";

      }
      console.log(string3);
      for(var j=0;j<7;j++){
        var n=queue.front();
        queue.dequeue();
        if(n<10)
        string4=string4+" "+n+"  ";
        else
        string4=string4+" "+n+" ";
      }
      console.log(string4);
      for(var j=n+1;j<=numberOfDays;j++){
        var n=queue.front();
        queue.dequeue();
        if(n<10)
        string5=string5+" "+n+"  ";
        else
        string5=string5+" "+n+" ";
      }
      console.log(string5);

},
/**
 * Number of Binary Search Tree
 */
binarySearchTrees:function(nodes)
{
    var firstTerm = parseInt(2*nodes);//cataln formula 
    var secondTerm =(1+nodes);
    var thirdTerm = nodes;
    var numberofBinarySearchTress = parseInt(this.factorial(firstTerm)/parseInt(this.factorial(secondTerm)*this.factorial(thirdTerm)));
     
            
    return numberofBinarySearchTress;

},
factorial(n) 
{ 
    const M = 100000007;
    var res = 1;           //factorial function
    for (var i = 1; i <= n; ++i) 
    { 
        res =(res*i)%M; 
    } 
  
    return res; 
},
/**
 * Modify the above program to store the Queue in two Stacks.
 */
stackCalender : function(month,year){
    var numberOfDays = new Date(year, month, 0).getDate();
    var dateObj=new Date(); 
    dateObj.setFullYear(year);
    dateObj.setMonth(month-1);
    dateObj.setDate(1);
    var day=dateObj.getDay();  
    var queue=new Queue1();
    queue.enqueue("SUN");
    queue.enqueue("MON");
    queue.enqueue("TUE");
    queue.enqueue("WED");
    queue.enqueue("THU");
    queue.enqueue("FRI");
    queue.enqueue("SAT"); 
    switch(day)
    {
        case 0: 
        break;
        case 1: queue.enqueue(" ");
        break;
        case 2: queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 3: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 4: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 5: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
        case 6: queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
                queue.enqueue(" ");
        break;
    }
    for(var i=1;i<=numberOfDays;i++){
        
        queue.enqueue(i);
        
    }
    //using two stack to store the queue
    var stack=new Stack1();
    var stack1=new Stack1();
    for(var i=1;i<=(numberOfDays+day+7);i++)
    {
        var n=queue.front();       //elements added in reverse order
        queue.dequeue();
        stack.push(n);
    }
    for(var j=1;j<=(numberOfDays+day+7);j++)
    {
        var n1=stack.peek();
        stack.pop();       // again push in stack for getting perfect order
        stack1.push(n1);
    }
   
     var string="";
    var string1="";
    var string2="";
    var string3="";
    var string4="";
    var string5="";
    for(var j=0;j<7;j++){
      var k=stack1.peek();
      stack1.pop();
      string=string+k+" ";
    }
    console.log(string);
    for(var j=0;j<7;j++){
        var k=stack1.peek();
        stack1.pop();
        string1=string1+" "+k+"  ";
      }
      console.log(string1);
      for(var j=0;j<7;j++){
        var k=stack1.peek();
        stack1.pop();
        if(k<10)
        string2=string2+" "+k+"  ";
        else
        string2=string2+" "+k+" ";

      }
      console.log(string2);
      for(var j=0;j<7;j++){
        var k=stack1.peek();
        stack1.pop();
        if(k<10)
        string3=string3+" "+k+"  ";
        else
        string3=string3+" "+k+" ";

      }
      console.log(string3);
      for(var j=0;j<7;j++){
        var k=stack1.peek();
        stack1.pop();
        if(k<10)
        string4=string4+" "+k+"  ";
        else
        string4=string4+" "+k+" ";
      }
      console.log(string4);
      //for checking leap year for feb
      if(month==2 && (year%400==0||(year%100!=0&&year%4==0))){
          var k1=numberOfDays+day+1;
      }
      else if(month==2){
          var k1=numberOfDays+day;
      }
      else{
          var k1=numberOfDays+day+3;
      }

      for(var j=n+1;j<=k1;j++){
        var k=stack1.peek();
        stack1.pop();
        if(k<10)
        string5=string5+" "+k+"  ";
        else
        string5=string5+" "+k+" "; 
    } 
    console.log(string5);
 

},
/**
 * Hashing Function to search a Number in a slot
 */
hash_search:function(val,length)

{
   
    var fs = require('fs'); //file open
    var contents = fs.readFileSync('hash.txt', 'utf8')//copy contents in variable
   
    var arr=contents.split(' ') //split each value separated by space in an array
   
    arr=arr.sort(function(a,b){
        return a-b;         //sort the whole array
    });
   var arr_list=new Array(length)
for(var i=0;i<length;i++)
{
    arr_list[i]=(new LinkedList());   //create the number of container lists
}

 for(var i=0;i<arr.length;i++)
{                       
    var rem=arr[i]%length;           //to find the hash key
    arr_list[rem].add(arr[i]);   //to add the elements to desired position using key
    
}

 var search_key=val%length;  //to find the search position according to the value to search

 var bool=arr_list[search_key].search(val);//retuen if the value exixts or not 

 if(bool)
 {
    console.log('\n\nvalue found & after deleting the value\n')
    arr_list[search_key].removeElement(val)    //remove from the linked list
    var arr_print=[]    //empty array taken
    var final_string='' //empty string taken
    for(var i=0;i<length;i++)
    {
        var str=''  
        str=i+'->'+arr_list[i].printList()+'';
        arr_print.push(str);
    }
    for(var j=0;j<arr_print.length;j++)
    {
        final_string+=arr_print[j]+'\n'
    }
    console.log(final_string);
    fs.writeFileSync('hashWrite.txt',final_string);//to write in a file
    process.exit();
 }

else
{
    console.log('\n\nvalue not found & after adding \n')
    arr_list[search_key].add(val)          //addd new value to the particular linked list
    var arr_print=[]
    var final_string=''
    for(var i=0;i<length;i++)
    {
        var str=''
        str=i+'->'+arr_list[i].printList()+'';
        arr_print.push(str);                 //concatenating each element of a linked list to an empty string 
    }
    for(var j=0;j<arr_print.length;j++)
    {
        final_string+=arr_print[j]+'\n'
    }
    console.log(final_string);
    var write=fs.writeFileSync('hashWrite.txt',final_string);//to write in a file
    process.exit();
 }

},

}       
