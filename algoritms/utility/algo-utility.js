module.exports = {
/**
 *    Two Strings are Anagram or not.
 */
    anagram:function(str1,str2)  
{    var str1 = str1.toLowerCase();
      var str2=str2.toLowerCase();
      var str1=str1.trim();
      var str1=str2.trim();
    if(isNaN(str1) && isNaN(str2) && str1.length == str2.length)//validation part
    {   
     var sortStr1 = str1.split('').sort().join('');//1st it split,then sort and after that it join the string
     var sortStr2 = str2.split('').sort().join('');

    if(sortStr1 === sortStr2) //comparing strings
    console.log("The Two Strings are Anagram")
    else console.log("The Two Strings are not Anagram");
   }
  else console.log("The Two Strings are not Anagram");
  
 },
 /**Take a range of 0 to N  Numbers and find the Prime numbers in that range. */
prime:function(num)
{   if(isNaN(num)) console.log("Invalid input")
    for(var i = 0; i <= num; i++)//to iterate upto the range
    {   
        for( var j = 2; j < i; j++)
        {
            if(i % j == 0)
            {
                var count = 0;
                break;
            }
            else
            {
                count = 1;
            }
        }
        if(count == 1)
        {  
            console.log(i);
        }
    }
},
/**
 * program to find the prime numbers that are Anagram and Palindrome
 */
eprime:function(num)
{   var arr=[];var arr2=[];
    if(isNaN(num)) console.log("Invalid input")
    for(var i = 0; i <= num; i++)
    {   if(i==2)  console.log("2")
        for( var j = 2; j < i; j++)
        {
            if(i % j == 0)
            {
                var count = 0;
                break;
            }
            else
            {
                count = 1;
            }
        }
        if(count == 1)
        {  
            arr.push(i);//pushing the elements into array for anagram checking
            arr2.push(i);//pushing the elements into array for pallindrome checking
        }
    }
     for(var i=0;i<=arr.length-1;i++)
    {
    for(var j=i+1;j<=arr.length;j++)
    {
     var str1=''+arr[i];
     var str2=''+arr[j];
    
    
    if(str1.length == str2.length)
    {   
     var sortStr1 = str1.split('').sort().join('');
     var sortStr2 = str2.split('').sort().join('');

    if(sortStr1 === sortStr2)
    console.log("The Two prime no are Anagram :"+arr[i]+" & "+arr[j])
    }
    }
    } 
    for (var r = 0; r < arr2.length; r++)
        {  
            var originalInteger=(arr2[r]);
        
        var n=originalInteger;
         var remainder;
         var reversedInteger=0;
        // reversed integer is stored in variable 
        while( n>0 )
        {
            remainder = n%10;
            reversedInteger = reversedInteger*10 + remainder;
            n = parseInt(n/10);
        }
    
        // palindrome if orignalInteger and reversedInteger are equal
        if (originalInteger === reversedInteger)
           console.log( "Prime pallindromes are: "+originalInteger);
    }
       
},
/**
 * BinarySearch method for strings & integers.
 */
binarySearch:function(array,search)
{
   var first  = 0;
    var last   = array.length- 1;
    var middle = Math.floor(first + last)/2;//finding middle element
    
    
    while( first <= last )
    {
      if ( array[middle] < search )
        first = middle + 1;    
      else if ( array[middle] == search ) 
      {
        console.log(search + " found at location " + (middle + 1) + ".");
        break;
      }
      else
         last = middle - 1;
 
      middle = (first + last)/2;
   }
   if ( first > last )
      console.log (search + " isn't present in the list");

},
/**Reads in strings from standard input and
 *  prints them in sorted order & Uses insertion sort. */
insertion:function(array)
{
    for (var i = 1; i < array.length; i++) //to iterate the whole array
    {
        var element = array[i]+'';//converting into strings
        var j;
        for (j = i - 1; j >= 0 && element.localeCompare(array[j]) <= 0; j--)//for comparing each & every element
            //swapping the positions
        array[j + 1] = array[j];
        array[j + 1] = element;
    }
    return array;
},
/**
 * Reads in integerss prints them in sorted order using Bubble Sort
 */
bubble:function(array)
{
    
    var length = array.length;
    for (var i = 0; i < length; i++) { //Number of passes
      for (var j = 0; j < (length - i - 1); j++) { 
        //Compare the adjacent positions
        if (parseInt(array[j]) > parseInt(array[j + 1])) {
          //Swap the numbers
          var tmp = array[j]; //Temporary variable to hold the current number
          array[j] = array[j + 1]; //Replace current number with adjacent number
          array[j + 1] = tmp; //Replace adjacent number with current number
        }
      }
    }
     return array;

},
/**
 * takes a command­line argument N, asks you to think of a number.
 */
guess:function(num){
var readline = require('readline-sync');
if(isNaN(num)) console.log("invalid input");else{

            var arr=[];// taking an empty array for pushing elements upto 0 to num
            
            for(var i=0;i<num;i++)
            {
              arr.push(i);
            }
            var l=0;
            var r=arr.length;
                while(l <= r) //to run the loop through the array elements.
                {  var mid=Math.floor((l+r)/2);//finding a middle point
                    var x=readline.question(`If the number is ${arr[mid]} press 1  else press 0: `);//readline-sync is used to know the user choice.
                   
                    if(x=='0')
                    {
                        var x1=readline.question(`Press 0 if the number is less than  ${arr[mid]} \nPress  1 if the number is greater than  ${arr[mid]}: `);
                        if(x1=='0')
                        {
                            r=mid-1;
                            

                        }
                        if(x1=='1')
                        {
                            l=mid+1;
                            
                        }
                    }
                    if(x=='1')
                    {
                       console.log(arr[mid]+' is the number thought');
                       process.exit();
         }

      }
  }},
  /**
   * Read in a list of words from File. Then prompt the user to enter a word to search the list. 
   *   The program reports if the search word is found in the list.
   */
  find:function(str){
   var fs = require('fs');
  var text = fs.readFileSync('text.txt','utf8');//used to read the file.
     var arr=text.split(" "); //splits each string from the separator
     arr=arr.sort(); //sorts the string
     var r=0;
     var l=arr.length;
     while(r<=l)  //loop for binary search starts.
     {
         var mid =Math.floor((r+l)/2);
         if(str==arr[mid])
         {
             console.log("The word is present in the file!!"); //prints if the word is present in the file.
             process.exit();
         }
         else if(str>arr[mid])
         {
             r=mid+1;
         }
         else if(str<arr[mid])
         {
             l=mid-1;
         }
         else{
             console.log(" your word not found in the file!!");//prints if the word is not present in the file.
             process.exit();
         }

        }
    
    },
    /**Merge Sort of list of Strings. */
    mergesort:function(array)
    {
        if (array.length === 1) 
            // return once we hit an array with a single item
            return array;
       var middle = Math.floor(array.length / 2) ;// get the middle item of the array rounded down
        var left = array.slice(0, middle) ;// items on the left side
        var right = array.slice(middle) ;// items on the right side
      
        return this.merge(
          this.mergesort(left),
          this.mergesort(right)
        )
        
    },
   // compare the arrays item by item and return the concatenated result
   merge:function (left, right) 
   {
    var result = [];
  var indexLeft = 0;
  var indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

//for merging those splited array
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)) 

},
/**
 * Use Recursion and check for largest value of the Note to return change
    to get to minimum number of Notes.
 */
calculateMinNoNote:function(amount,mNote)
{
        
		if(amount == 0) return;
		
	
		//calculate 1000 rupess notes
		if(amount>=1000){
			mNote+=Math.floor(amount/1000);
			console.log("1000 Rupes Notes is: "+Math.floor(amount/1000));
			if(amount%1000 == 0){
                console.log("min note required:"+(mNote))
				return;}
			else
            this.calculateMinNoNote(amount%1000,mNote);
		}
		
		//calculate 500 rupess notes
		else if(amount>= 500){
			mNote+=Math.floor(amount/500);
			console.log("500 Rupes Notes is: "+Math.floor(amount/500));
			if(amount%500 == 0){
                console.log("min note required:"+(mNote))
                return;
            }
			else{
            this.calculateMinNoNote(amount%500,mNote);
            }
		}

		//calculate 100 rupess notes
		else if(amount>= 100){
			mNote+=Math.floor(amount/100); 
			console.log("100 Rupes Notes is: "+Math.floor(amount/100));
			if(amount%100 == 0){console.log("min note required:"+(mNote))
				return;}
			else
            this.calculateMinNoNote(amount%100,mNote);
		}

		//calculate 50 rupess notes
		else if(amount>= 50){
			mNote+=Math.floor(amount/50);
			console.log("50 Rupes Notes is: "+Math.floor(amount/50));
			if(amount%50 == 0){ console.log("min note required:"+(mNote))
				return;}
			else
            this.calculateMinNoNote(amount%50,mNote);
		}
		
		//calculate 10 rupess notes
		else if(amount>= 10){
			mNote+=Math.floor(amount/10); 
			console.log("10 Rupes Notes is: "+(amount/10));
			if(amount%10 == 0){

         console.log("min note required:"+(mNote))
				return;}
			else
            this.calculateMinNoNote(amount%10,mNote);
		}

		//calculate 5 rupess notes
		else if(amount>= 5){
			mNote+=Math.floor(amount/5); 
			console.log("5 Rupes Notes is: "+Math.floor(amount/5));
			if(amount%5 == 0){
                console.log("min note required:"+(mNote))
				return;}
			else
            this.calculateMinNoNote(amount%5,mNote);
		}

		//calculate 2 rupess notes
		else if(amount>= 2){
			mNote+=Math.floor(amount/2); 
			console.log("2 Rupes Notes is: "+Math.floor(amount/2));
            if(amount%2 == 0)
            {console.log("min note required:"+(mNote));
				return;}
			else{
                this.calculateMinNoNote(amount%2,mNote);
            }
		}

		//calculate 1 rupess notes
		else if(amount>= 1){
			mNote+=Math.floor(amount/1);
			console.log("1 Rupes Notes is: "+Math.floor(amount/1));
            if(amount%1 == 0)
              { console.log("min note required:"+(mNote));
				return;}
			else
				this.calculateMinNoNote(amount%1,mNote);
        }
    
    
        
    },
  /**calculate monthlyPayment that reads in three command­line arguments P, Y, and R*/
    monthlyPayment:function(P,Y,R)
    { if(isNaN(P)&&isNaN(R)&&isNaN(Y)) console.log("invalid input");
    else{
        var r=R/(12*100);
        var n=12*Y;
        var payment=(P*r)/(1-(Math.pow(1+r,(-n)))); //Calculates the monthly payment
        console.log("The monthly payment is: "+payment);}
    },
      /**Add temperaturConversion static function, given the temperature in fahrenheit 
                      as input outputs the temperature in Celsius or viceversa */
    temper: function(temp,value)
    {
        if(isNaN(temp)===false)
        {
            if(value.toLocaleUpperCase()==='F')
            {
                var temp1=(temp-32)*(5/9); //converts to celsius
                console.log("The temperature in celsius is: "+temp1+" C");
            }
            if(value.toLocaleUpperCase()==='C')
            {
                var temp2=(temp*(9/5))+32; //converts to fahrenheit
                console.log("The temperature in fahrenheit: "+temp2+" F")
            }
    
        }
        else console.log("Invalid input");
       
    },
    sqrt:function(value)
    { if(isNaN(value)) console.log("invalid input");
    else{
        var t=value;
        while(Math.abs(t-value/t)>Number.EPSILON*t)//condition for the step by step process of acalculting the loop.
        {
            t=((value/t)+t)/2;
        }
     console.log("THe approx root of the value is: "+t);
     } },
     /**
      *  takes a date as input and prints the day of the week that date falls on.
      */
    dayOfWeek : function(date)
    {
       var d= date[0];
       var m=date[1];
       var y=date[2];
       if(isNaN(d)===false && isNaN(m)===false && isNaN(y)===false)
        {
           var y1=y-((14-m)/12);
        y1=Number.parseInt(y1);
        var x=y1+(y1/4)-(y1/100)+(y1/400);
        x=Number.parseInt(x);
        var m1=m+12*((14-m)/12)-2;
        m1=Number.parseInt(m1);
        var d1=Number.parseInt(((d+x+31*m1)/12)%7);
       


        var day='';
        /*switch case for printing the day according to the number*/
        switch(d1)                              
        {
            case 0:
            day = day+'Sunday';
            break;
            case 1:
            day = day+'Monday';
            break;
            case 2: 
            day = day+'Tuesday';
            break;
            case 3:
            day = day+'Wednesday';
            break;
            case 4:
            day = day+'Thrusday';
            break;
            case 5:
            day = day+'Friday';
            break;
            case 6:
            day = day+'Saturday';
            break;
        }
        console.log(day);
       
    }
    else console.log("Invalid input");

    },
    /**
     *  a static function Binary that outputs the binary 
     * (base 2) representation of the decimal number typed as the input.
     */
    Binary:function(num)
    {   if(isNaN(num)) console.log("invalid input");
    else{
       var binaryNum=[];
       var binaryNum1=[];
       binaryNum.length=64;
       binaryNum.length=64;
       var i=0;
       var k=0;
       while(num>0)
       {
           binaryNum[i]=Math.floor(num%2);    //to convert decimal to binary
           num=Math.floor(num/2);
           i++;
       }
       for(var j=i-1;j>=0;j--)    //in reverse order we have to take in array
       {
           
           console.log(binaryNum[j]);
           binaryNum1[k]=binaryNum[j];
           k++;
       }
       return binaryNum1;
    }},

/** Swap nibbles and find the new number & 
 * Find the resultant number is the number is a power of 2. */
    swap:function(read,val)
{
    var arr=[];
//to convert decimal into binary
while(val>0)
    {
        var r=val%2;
        arr.unshift(r); //for reverse order insertion
        val=Math.floor(val/2);
        
    }
    // add 0 to the empty position before swapping
while(arr.length<8)                    
{
    for(i=0;i<(8-arr.length);i++)   
    {
        arr.unshift(0);             
    }

}
console.log("After adding 0 the result:[ "+arr+"]");
//Swapping nibbles
for(var i=0;i<4;i++)
{
    var temp=arr[4+i]       
    arr[4+i]=arr[i];     
    arr[i]=temp;      
}
console.log("After swapping the bits the result is [:"+arr+"]");
//converting to decimal
var sum=0;
for(i=7;i>=0;i--)
{
    sum=sum+(Number(arr[7-i])*this.pow(i)); 

}

console.log('value after bit swapping will be-->'+sum)
this.isPower(sum);
read.close();

},
// function to calculate the binary to decimal
pow:function(val)
{
    var a=1;
    for(var i=1;i<=val;i++)
    {
        a=a*2;
    }
    return a;
},
//function for checking that is that number is decimal or not
isPower:function(val)
{
    var temp=val;
    var count=0;
    if(val%2==0)
    {
        while(val%2==0)
        {
            count++;
            val=val/2;
        }
        if(val==1)
        console.log('\nit is  power of 2-->2^'+count+'= '+temp);
        else 
        console.log('\nIt is not a power of 2\n');
    }
    else   
        console.log('\nIt is not a power of 2\n');


},
/**
 * Check using Stopwatch the Elapsed Time for every method call
 */
getCurrentTime:function()
    {
      var d=new Date(); //to get system info
      var start=d.getTime();
      return start;
    },
    getElapsedTime:function(startTime,stopTime)
    {
        var elap=(stopTime-startTime);//elapsed time in b/w start & stops
        return elap;


    },
    /**
     * bubble sort for strings
     */
    bubblestr:function(array)
{
    
    var length = array.length;
    for (var i = 0; i < length; i++) { //Number of passes
      for (var j = 0; j < (length - i - 1); j++) { 
        //Compare the adjacent positions
        if ((array[j]) > (array[j + 1])) {
          //Swap the numbers
          var tmp = array[j]; //Temporary variable to hold the current number
          array[j] = array[j + 1]; //Replace current number with adjacent number
          array[j + 1] = tmp; //Replace adjacent number with current number
        }
      }
    }
     return array;

},
/** insertion sort integers */
inserint:function(array)
{
    var temp;
        for (var i = 1; i < array.length; i++) {
            for(var j = i ; j > 0 ; j--){
                if(parseInt(array[j]) < parseInt(array[j-1])){
                    temp = array[j];
                    array[j] = array[j-1];
                    array[j-1] = temp;
                }
            }
        }
    return array;
},



}





 
















