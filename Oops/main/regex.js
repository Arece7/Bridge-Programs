
var utility = require('../utility/util.js');//importing utility
var readlinesync = require('readline-sync');//importing readline sync
var fs = require('fs');
var text = fs.readFileSync('regex.txt','utf8');
function regex(){
   
    var name=readlinesync.question("Enter the first name  :");
    if(isNaN(name)==false) console.log("plz enter string only");
    else{
    var fullname=readlinesync.question("Enter the full name  :");
    if(isNaN(fullname)==false) console.log("plz enter string only");
    else{
    var mobile=readlinesync.question("Enter the mobile no  :");
    if(isNaN(mobile) || mobile.length!=10) console.log("plz enter correct phone no");  
   else {
    var date=new Date();
    var dateStr=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    utility.regex(text,name,fullname,mobile,dateStr);
}}}

 
}
regex();