document.write("Javascript stuff! in external file <br />");
document.write(2022);
document.write("<br>");
document.write("Math stuff! " + 1 + 1 + "<br />");
document.write("Math stuff! " + (1 + 1) + "<br />");
//2 command between 2 values, they're appended
document.write("Math stuff! " + 1,1 + "<br />");


window.document.write("Javascript stuff! in external file <br />");
window.document.write(2022);
window.document.write("<br>");
window.document.write("Math stuff! " + 1 + 1 + "<br />");
window.document.write("Math stuff! " + (1 + 1) + "<br />");
//2 command between 2 values, they're appended
window.document.write("Math stuff! " + 1,1 + "<br />");


var a = 10;
var _a = 20;
var A = 30;

document.write(a + " " + _a + " " + A + "<br />");


var f;
document.write(f + " here <br />");

var g = "abc";
document.write(g + " here <br />");

var h = true;
document.write(h + " here <br />");

var i = g + h;
document.write(i + "<br />");

var x = 5;
document.write("x == 5 "+ (x == 5) +"<br />");

document.write("x == \"5\" "+ (x == "5") +"<br />");

document.write("x === \"5\" "+ (x === "5") +"<br />")

document.write("x === 5 "+ (x === 5) +"<br />")

var m = 5
var n = 6;

document.write((m==5) && (n==6) + "<br />");
document.write(((m==6) && (n==6)) + "<br />");
document.write(((m==5) || (n==6)) + "<br />");
document.write((m==6) || (n==6) + "<br />");
document.write(!(m==5) + "<br />");
document.write(!(m==6) + "<br />");


var test = 5;
test += 10;
document.write(test + "<br />");

test -= 5;
document.write(test + "<br />");

test *= 3;
document.write(test + "<br />");

test /= 5;
document.write(test + "<br />");

test %= 4;
document.write(test + "<br />");

test ^= 3;
document.write(test + "<br />");

var a = 1
var b = 20
var c = true;
var d = "JJ"
var e = 14821.123213;
var f = ["a", "b", "c"];

document.write();

document.write("Type of var a is a " + typeof a + "<br />");
document.write("Type of var b is a " + typeof b + "<br />");
document.write("Type of var c is a " + typeof c + "<br />");
document.write("Type of var d is a " + typeof d + "<br />");
document.write("Type of var e is a " + typeof e + "<br />");
document.write("Type of var f is a " + typeof f + "<br />");

str = new String("Hello");
var validString = str instanceof String;
document.write("Valid String = "+validString + "<br />");

num = new Number(0987654321)
var validNumber = num instanceof Number;
document.write("Valid Number = "+validNumber + "<br />");

var fruits = ["Banana", "Orange", "Apple"];
var validArray = fruits instanceof Array;
document.write( "Valid Array = "+validArray + "<br />");

//AND Operator 0101 AND 0001
document.write("AND "+(5&1) + "<br />");
document.write("AND "+(10&3) + "<br />");
//OR Operator 0101 OR 0001
document.write("OR "+(5|1) + "<br />");
document.write("OR "+(6|3) + "<br />");
//NOT Operator
//~5 gives you 1111 1010 which is -6
document.write("NOT "+ (~5) + "<br />");
document.write("NOT "+(~3) + "<br />");
//XOR Operator 
document.write("XOR "+ (5^1) + "<br />");
document.write("XOR "+ (8^3) + "<br />");
//Left Shift Operator (Zero fill left shift) eg 0101 become 1010 because the first 0 got shifted which is 10
document.write("Left Shift "+ (5<<1) + "<br />");
document.write("Left Shift "+ (9<<2) + "<br />");
//Right Shift operator >> same as left right but happening on the right 0101 -> 0010
document.write("Right Shift "+ (5>>1) + "<br />");
document.write("Right Shift "+ (9>>1) + "<br />");


//Conditional
var cond = 21;
if(cond % 2 == 0){
    document.write(cond + " is an even number <br />");
}
else{
    document.write(cond + " is a not even number <br />")
}


//Grades (if-else)
var marks = 85
if(marks >= 85){
    document.write(marks + " is grade A ");
}
else if(marks >= 70 && marks < 85){
    document.write(marks + " is grade B ");
}
else if(marks >= 50 && marks < 70){
    document.write(marks + " is grade C ");
}
else if(marks >= 40 && marks < 50){
    document.write(marks + " is grade D ");
}
else if(marks >= 0 && marks < 40){
    document.write(marks + " is grade F ");
}
else{
    document.write("Invalid mark! Can't be graded!");
}
document.write("<br /> ");

//switch-case
var month = 2;

switch(month){
    case 1:
        document.write("January!");
        break;
    case 2:
        document.write("February!");
        break;
    case 3:
        document.write("March!");
        break;
    case 4:
        document.write("April!");
        break;
    case 5:
        document.write("May!");
        break;
    case 6:
        document.write("June!");
        break;
    case 7:
        document.write("July!");
        break;
    case 8:
        document.write("August!");
        break;
    case 9:
        document.write("September!");
        break;
    case 10:
        document.write("October!");
        break;
    case 11:
        document.write("November!");
        break;
    case 12:
        document.write("December!");
        break;
    default:
        document.write("Invalid Month!");
        break;
}
document.write("<br /> ");


//Loops
//For Loops
var num = 1;
for(var i=0; i<30; i++){
    if(num % 3 == 0 && num % 5 == 0){
        document.write("FizzBuzz <br />");
    }
    else if(num % 3 == 0){
        document.write("Fizz <br />");
    }
    else if(num % 5 == 0){
        document.write("Buzz <br />");
    }
    else{
        document.write(num + "<br />");
    }
    num++;
}

var fruits = ["Apple", "Orange", "Watermelon"];
for(var i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br />");
}

//While Loops
var loop = 1
while(loop <= 30){
    if(loop % 3 == 0 && loop % 5 == 0){
        document.write("FizzBuzz <br />");
    }
    else if(loop % 3 == 0){
        document.write("Fizz <br />");
    }
    else if(loop % 5 == 0){
        document.write("Buzz <br />");
    }
    else{
        document.write(loop + "<br />");
    }
    loop++;
}
document.write("<br />");

//Do While Loops
loop = 1
do{
    if(loop % 3 == 0 && loop % 5 == 0){
        document.write("FizzBuzz <br />");
    }
    else if(loop % 3 == 0){
        document.write("Fizz <br />");
    }
    else if(loop % 5 == 0){
        document.write("Buzz <br />");
    }
    else{
        document.write(loop + "<br />");
    }
    loop++;
}
while(loop <= 30)

//For-Of Loops (Used during an array object)
var skills = ["HTML", "CSS", "JS"];
for(s of skills){
    document.write(s + "<br />");
}

//For-In Loops
//Creating objects in js
var short = {
    html:"Hypertext Markup Language",
    css:"Cascading Style Sheet",
    js:"Javascript"

}
//Getting the variable
for(var sn in short){
    document.write(sn + " = ");
    document.write(short[sn] + " ");
    document.write("<br />");
}

//No-Scripts is when the user disable javascript or an browser that doesn't support javascirpt
//Please check JavascriptDemo.html for <noscript> tag

//Pop-ups in JS
//Alert Message
/*
alert("Hello :D");
alert("Hello again :D");
alert("Multiple Line \nLine 2 \nHello x3 :D");
*/

//Confirmation Box
//As there are 2 options, confirm will return a boolean
/*
var res = confirm("Yo! Confirm Box!");
alert(res);
*/

//Prompt (to collect input from the user)
/*
var res = prompt("Hello! Enter something!");
if(res != null || res.length == 0){
    alert("This is what you've entered : " + res);
}
else{
    alert("You have entered nothing! D:");
}
*/

/*
//eval - Converts a string to an integer.
var en = prompt("Enter a number please!")
//Expection handling, to make sure that the program don't terminate in the middle of the program

try{
    alert(eval(en));
    alert("Number!")
}
catch(e){
    alert(e + "\nNot a number");
}
*/

/*
//able to access if var is called outside of the block
var varVar = "a";
//not able to access if let is called outside the block
//allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used
let letVar = "b";
//const cannot be Redeclared, cannot be Reassigned, and have Block Scope.
const constVar = "c";

if(true){
    letVar = "d";
    const constVar = "e";
    alert(varVar + "\n" + letVar + "\n" + constVar)
}

alert(varVar + "\n" + letVar + "\n" + constVar);
*/

//logging
console.log("Hello!");

var logTest = 5
for(i=0;i<logTest; i++){
    console.log("Test " + i)
}

//Methonds in javascript
var addition = add(10,20);
console.log(addition);

function add(x,y){
    return x + y;
    
}
document.write(add(30,50) + "<br />");

function squareroot(a){
    var sr = a * a;
    document.write("Squareroot is "+ sr + "<br />");
}

squareroot(5);

var newInt = "5"
newInt = parseInt(newInt);
document.write((newInt) +" "+(newInt + 5) + "<br />")

var newFloat = "10"
newFloat = parseFloat(newFloat)
document.write((newFloat) +" "+(newFloat + 5) + "<br />")