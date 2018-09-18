const _ = require("lodash")
module.exports = {

    /** @description Print the year is a Leap Year or not & ensure it is a 4 digit number.*/

    calc: function (year) {
        var y = parseInt(year); //converting to integer
        var y1 = y.toString(); // converting to string

        if (y1.length == 4) //ensures that year is a 4 digit number(validation)
        {
            if ((y % 400 == 0) || ((y % 100 != 0) && (y % 4 == 0)))
                console.log("It is a leap year");
            else
                console.log("It is not a leap year");
        }
        else console.log("Invalid input")
    },


/**@description Take Input from user and Replace String Template “Hello <<UserName>>, How are you?”*/

    replace: function (userinput) {
        var y1 = userinput.length;
        if (y1 >= 3) {
            console.log("Enter your username");
            console.log("hello " + userinput + ",how are you?");
        }
        else console.log("add more character");
    },


/**@description Flip Coin and print percentage of Heads and Tails*/

    flip: function (t) {
        var countHead = 0;
        var countTail = 0;
        for (i = 1; i <= t; i++) {
            var p = Math.random(); //random function is used for getting random values
            if (p < 0.5)
                countHead++;
            else countTail++;
        }
        var percentHead = (countHead / t) * 100;
        var percentTail = (countTail / t) * 100;
        console.log("percentage of Head :" + percentHead + "  percentage of tail: " + percentTail);
    },


    /** @description This program takes a command­line argument N and prints a table of the powers of 2 */

    power() {
        var limit = process.argv[2]; //takes the command line arguments from console
        if (limit >= 31) console.log("out of range");//validation
        else {
            for (var i = limit; i >= 1; i--) {
                value = Math.pow(2, i);
                console.log("2^" + i + "=" + value);
            }


        }
    },


    /**@description Harmonic Number*/

    harmonic: function (n) {
        var sum = 0;
        for (i = 1; i <= n; i++) {
            sum = sum + 1 / i;
        }
        console.log("nth sum=" + sum);
    },


   /**@description Computes the prime factorization of n using brute force.*/

    factor: function (n) {
        while (n % 2 == 0) {
            console.log(2 + " ");  
            n = n / 2;
        }
        for (i = 3; i <= Math.sqrt(n); i += 2) {
            // While i divides n, print i and divide n
            while (n % i == 0) {
                console.log(i + " ");
                n = n / i;
            }
        }
        if (n > 2)
        console.log(n);
    },


  /**@description Distance using Math.pow()*/
    distance: function (x, y)
     {
         if(isNaN(x) && isNaN(y)) //validate that the user inputs are numbers
            {
                console.log("invalid");
            }
        else{
         var dis = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 1 / 2);
            console.log("distance from (" + x + ", " + y + ") to (0, 0) = " + dis);
        }
    
     
    },


    /**@description Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal.  */
   
    gamble: function (stake, goal, trials) {
        var wins = 0;
        var bets = 0;
        var loss = 0;
        for (t = 0; t < trials; t++) {
            var cash = stake;
            while (cash > 0 && cash < goal)  //base condition for betting
             {   bets++;
                if (Math.random() < 0.5) 
                cash++;
                else cash--;
            }
            if (cash == goal) wins++;
            else loss++;
        }

        console.log(wins + " wins of " + trials);
        console.log("Percent of games won = " + wins / trials * 100);
        console.log("Percent of games loss = " + loss / trials * 100);
        console.log("Avg bets = " + bets / trials);
    },


   /**@description Sum of three Integer adds to ZERO*/

    findTriplets: function (read, value) {
        var arr2 = [];b=[];
        var count = 0;

        function triplet(value) {
            if (arr2.length >= value) {

                for (var i = 0; i < value; i++) {
                    for (var j = i + 1; j < value; j++) {
                        for (var k = j + 1; k < value; k++) {
                            if (Number(arr2[i]) + Number(arr2[j]) + Number(arr2[k]) === 0) {
                                if ((Number(arr2[i]) != Number(arr2[j])) != Number(arr2[j])) {
                                    count++;
                                    console.log('triplets found [' + arr2[i] + ', ' + arr2[j] + ', ' + arr2[k] + ']');
                                    b.push(arr2[i]+','+arr2[j]+','+arr2[k]); //pushing elements into array
                                }
                            }
                        }
                    }
                }
                var distinct=new Set(b);//using set for distinct triplets
                console.log('total no of triplets->' + count);
                if([...distinct].length!=0){
                    console.log("Distinct triplets are :" +([...distinct]));
                    console.log("The no of Distinct trplets= "+[...distinct].length);
                }
            }
            else
                read.question(`enter the ${(arr2.length + 1)} value-> `, function (a) //take user input from console
                {   
                    arr2.push(a); //push the elements in array from userinput
                    triplet(value); // function is used recursively
                });
        }
        triplet(value);// function is used recursively
    },



   /**@description Coupon Numbers*/

    coupon: function (min, max) {
        var random = [], i, n;
        for (i = min; i < max; i++) {
            n = _.random(min, max)
            random.push(n);
        }
        console.log(random);
        console.log("no of coupon generated" + random.length);
        var distinct = new Set(random);
        console.log(distinct);
        console.log("number of distinct coupon" + [...distinct].length);

    },


   /**@description 2D Array*/

    array: function (read, r, c) {

        var limit = r * c;
        var arr1 = [];
        function input(limit) {

            if (arr1.length >= limit) {
                var k = 0;
                arr2 = [];
                var string = '';
                for (var i = 0; i < r; i++) {
                    for (var j = 0; j < c; j++) {
                        string = string + arr1[k] + ' '; //for printing the output in matrix form
                        k++;
                    }
                    arr2.push(string);
                    string = '';
                }
                for (let index = 0; index < arr2.length; index++) {
                    console.log(arr2[index]);
                }
            }
            else {
                read.question(`Please enter the ${(arr1.length + 1)} th value: `, function (ans) {
                    arr1.push(ans); //pushing elements which are inserted by user into an array

                    input(limit);// function is called recursively

                });
            }

        }
        input(limit);
    },


   /**@description find the roots of the equation a*x*x + b*x + c.*/

    quard: function (a, b, c) {
        var root1, root2;
        var determinant = b * b - 4 * a * c;
        // condition for real and different roots
        if (determinant > 0) {
            root1 = (-b + Math.sqrt(determinant)) / (2 * a);
            root2 = (-b - Math.sqrt(determinant)) / (2 * a);
            console.log("the value of root1: " + root1);
            console.log("the value of root2: " + root2);
        }
        // Condition for real and equal roots
        else if (determinant == 0) {
            root1 = root2 = -b / (2 * a);
            console.log("the value of the root1 & root2: " + root1)
        }
        // If roots are not real
        else {
            realPart = -b / (2 * a);
            imaginaryPart = Math.sqrt(-determinant) / (2 * a);
            console.log("the value of root1: " + realPart + " + " + imaginaryPart + "i");
            console.log("the value of root2: " + realPart + " - " + imaginaryPart + "i");
        }
    },


    /**@description WindChill*/

    windchill: function (t, v) {
        if (t < 50 || 3 < v < 120) //validation 
        { 
            //the effective temperature (the wind chill)
            var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log("windchill = " + w);
        }
        else console.log("data is invalid...plz try again");
    },


    /**@description static functions to return all permutation of a String*/

    permute: function (str) {

        var candidate = "";
        var remaining = str;

        this.permutations("",remaining);


    },
    permutations : function(candidate, remaining) {
        {
            
            if (remaining.length === 0) //this is the base condition for recursion
            {
                console.log(candidate);
            }
        }
        for (var i = 0; i < remaining.length; i++) {
            newCandidate = candidate + remaining.charAt(i);

            newRemaining = remaining.substring(0, i) + remaining.substring(i + 1);

            this.permutations(newCandidate, newRemaining); //function is called recursively
        }
    },


    /**@description Stopwatch Program for measuring the time that elapses betweenthe start and end clicks*/

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
    

}








