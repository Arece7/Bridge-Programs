var readline = require('readline');
var util=require('../Utility/calculate.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function coupongenerator() {

    read.question("Enter the Number of cupon digit u want: ", (n)=> {
        read.question("Enter the Number of coupon u want to generate : " ,(m) => {
    for(var j = 0; j<m; j++){
    var coupon = '';
    
    var string = "0123456789";
    
    for (var i = 0; i <n ; i++) {
    
    coupon += string.charAt(Math.floor(Math.random() * string.length));
    
    }
    
    console.log(coupon);
}
    read.close();
    });
    });
}
    coupongenerator();

