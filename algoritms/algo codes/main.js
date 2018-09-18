/**
 *  Purpose         : Check using Stopwatch the Elapsed Time for every method call
 *  @description    
 *  @file           : main.js
 *  @overview       : ­Output the Search and Sorted List. More importantly print elapsed time performance in descending order
 *  @module         : algo-utility.js
 *  @author         : Arghya Ray
*/
var readline = require('readline')
var utility=require('../utility/algo-utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var result1,result2,result3;
function sortNsearch(){
    
    read.question('Enter the size: ', (size) => {
        start=utility.getCurrentTime();// for starting stopwatch
        arrayIn(size);
    })

}
var arr = [];
arrayIn = function (size) {
    
        
      if (size == 0){
          //for bubble sort
          if(isNaN(arr[0]==false)){
            utility.bubble(arr);}
            else{utility.bubblestr(arr);}
            console.log("Buuble Sorted array is: ");
            console.log(arr);
            stop=utility.getCurrentTime();  //for stopping stopwach for bubble sort
            result1=utility.getElapsedTime(start,stop);
                console.log("BUBBLE Runtime= "+result1 +" miliseconds");
                
                //for insertion sort
                if(isNaN(arr[0])){
                utility.insertion(arr);}
                else utility.inserint(arr);
                console.log("Insertion Sorted array is: ");
                            console.log(arr);
                            stop=utility.getCurrentTime(); //for stopping stopwach for insertion sort
                            result2=utility.getElapsedTime(start,stop);
                            console.log("INSERTION RunTime= "+result2 +" miliseconds");
                            start=utility.getCurrentTime();
                 // for binary search
                read.question("Enter number to be searched: ", function(search){
                    utility.binarySearch(arr,search);
                    stop=utility.getCurrentTime();//for stopping stopwach for binary search
                    result3=utility.getElapsedTime(start,stop);
                        console.log("BINARY SEARCH Runtime= "+result3 +" miliseconds");
                               //storing results in an array
                                var arr1=[result1,result2,result3];
                                //sorting in decending order
                                arr1=arr1.sort(function(a,b){
                                return (b-a);
                            });
                            console.log("all sorting and searching in descending order is: ")
                            console.log(arr1); 
                        });  
               // });  
        } else {
            read.question('Enter input: ', (number) => {
              
            arr.push(number)
            arrayIn(--size);
          });
        
      } 
  };
sortNsearch();


    