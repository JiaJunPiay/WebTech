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

//Methods in javascript
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
//Float numbers will be 2
document.write(parseInt(2.31221412)+ "<br />")
document.write(parseInt("8976543") + "<br />")
//Will take the first number only so 4
document.write(parseInt("4 Hello World") + "<br />")
//Will get NaN (Not a Number) as it consider the initial value
document.write(parseInt("Hello 4 World") + "<br />")
//Check parseInt really change it into a number
document.write(typeof parseInt("9876543") + "<br />")

var newFloat = "10"
newFloat = parseFloat(newFloat)
document.write((newFloat) +" "+(newFloat + 5) + "<br />")
document.write(parseFloat("897.6543") + "<br />")
//Will take the first number only so 4
document.write(parseFloat("4.76543 Hello World") + "<br />")
//Will get NaN (Not a Number) as it consider the initial value
document.write(parseFloat("Hello 4 World") + "<br />")
//Check parseFloat really change it into a number
document.write(typeof parseFloat("987.6543") + "<br />")

//Javascript array allows both numbers and string
var arr = [1,2,3,4,5,"a","b","c","d","e","f"]
for(var i = 0; i < arr.length; i++){
    document.write(arr[i] + "<br />")
}

//Push into array
var arr=[10];
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);

document.write(arr + "<br />")

var popa = arr.pop();
//Last value
document.write("Pop! : " + popa + "<br />")

//Sort
//Sort uses UTF16 for num
var sortArr = ["d", "c", "a", "e", "b"]
document.write(sortArr +  "<br />")
sortArr.sort();
document.write(sortArr +  "<br />")



//Splice
//splice(starting index, how many to delete)

var spliceArr = [1,2,3,4,5,6,7,8,9]
document.write("Before splice : " + spliceArr + "<br />")
//splice method will return the value that has been deleted
var deletedSplice = spliceArr.splice(2,4);
document.write("After splice : " + spliceArr + "<br />");
document.write("Splice return Array : " + deletedSplice + "<br />");
//after the first 2 numbers, the behind variables are to add into the arrays
var newSpliceArr = spliceArr.splice(2,2, 1,2,3,4,5);
document.write("Splice return Array : " + newSpliceArr + "<br />");


//Slice 
var sliceArr = [1,2,3,4,5,6,7,8,9,0];
document.write("Before slice : " + sliceArr + "<br />")

var deletedSlice = sliceArr.slice(2,4);
document.write("After splice : " + sliceArr + "<br />");
document.write("Splice return Array : " + deletedSlice + "<br />");

//slice(-1) -> start from the last array
//rather than starting from 1, it will start from the 9 and work its way down (-1) -> 9 (-2) -> 8,9
document.write(sliceArr.slice(-1) + "<br />");
document.write(sliceArr.slice(-2) + "<br />");

//forEach
var forArr = ["a","b","c"]
forArr.forEach(printArray);

function printArray(value, index, ar){
    document.write("arr["+index+"] = "+ value + "<br/>" )
}

var forSum = 0;
var forNumArray = [1,2,3,4,5]
//forEach will get the value from each array inside the arrayList
//put the function inside the bracket
forNumArray.forEach(sum)

function sum(value){
    forSum = forSum + value
}
document.write("Num array : " + forNumArray + "<br/>")
document.write("Total value is : " + forSum + "<br/>")

//map - creates a new array from calling a function for every array element
var mapNum = [2,4,6,8,10]
//put the function inside the bracket
var mapNum2 = mapNum.map(squareValue)

function squareValue(value){
    return value*value;
}

document.write("Map array : " + mapNum + "<br/>")
document.write("Square Map array : " + mapNum2 + "<br/>")


//Filter
var filterNum = [1,2,3,4,5,6,7,8,9]
var evenArr = filterNum.filter(isEven);
var oddArr = filterNum.filter(isOdd);


function isEven(value){
    return value%2==0;
}

function isOdd(value){
    return value%2!=0;
}


document.write("No Filter is : " + filterNum + "<br/>")
document.write("Even Array is : " + evenArr + "<br/>")
document.write("Odd Array is : " + oddArr + "<br/>")


//Reduce
//0 is added at the back as a starting point for prev attribute
var totalSum = filterNum.reduce(addAllArr);
var totalMul = filterNum.reduce(mulAllArr);

function addAllArr(prev, value, index, ar){
    return prev+value;
}

function mulAllArr(prev, value, index, ar){
    return prev*value;
}

document.write("Total sum : " + totalSum + "<br/>")
document.write("Total mul : " + totalMul + "<br/>")


//Object Literal
var book = {
    name:"Book A",
    desc:"ABC",
    year:2017,
    price:123456
}
document.write("<br />");
document.write(book.name + "<br />");
document.write(book.desc + "<br />");
document.write(book.year + "<br />");
document.write(book.price + "<br />");


//instance of an object
var oBook = new Object();
oBook.name = "Book B"
oBook.desc = "jhedsgagasgasg"
oBook.year = 2019
oBook.price = 7102

document.write("<br />");
document.write(oBook.name + "<br />");
document.write(oBook.desc + "<br />");
document.write(oBook.year + "<br />");
document.write(oBook.price + "<br />");

//Constructor way to create an object
function bookConstructor(name, desc, year, price){
    this.name = name;
    this.desc = desc;
    this.year = year;
    this.price = price;
}

var cBook = new bookConstructor("Book C","jhgfsafas",2018,1234567890);
document.write("<br />");
document.write(cBook.name + "<br />");
document.write(cBook.desc + "<br />");
document.write(cBook.year + "<br />");
document.write(cBook.price + "<br />");

/*
//Getter and Setters for Objects
function trainerObj(name, skill, location){
    this.name = name;
    this.skill = skill;
    this.location = location;

    this.getName = function(){
        return this.name;
    }

    this.setName = function(location){
        this.name = name;
    }

    this.setTrainerLocation = function(location){
        this.location = location;
    }
}


trainer = new trainerObj("Trainer A", "Running", "NIL");
document.write("<br />");
document.write(trainer.name + trainerObj.getName);
document.write(trainer.skill + "<br />");
document.write(trainer.location + "<br />");
*/

//Arrow function
//
/*
var a = (input here) =>{

}
*/

function rect(width, height){
    this.width = width;
    this.height = height;

    this.getArea = function(){
        return width*height;
    }
}

var areaRect = new rect(30,20).getArea();
document.write("Area is " + areaRect + "<br />")

var rectArea = (width,height) => width * height;

document.write("Area is " + rectArea(20,30) + "<br />")

//toExponential() -> number into an exponential notation:
var num = 5.56789;
document.write("Exponential : " + num.toExponential()+ "<br />");



//toFixed()

var fixed = 100/3;
document.write(fixed.toFixed(3) + "<br />");
//will print out 33.333 -> after the decimal point

//toPrecision()
var precision = 100/3;
document.write(precision.toPrecision(3) + "<br />");
//will print out 33.3 -> count how many numbers to show

//Both toFixed and to Precision do rounding up of numbers from the last digit that was cut off if any
var roundUp = 1.9876543

document.write("Round up (Fixed) = " + roundUp.toFixed(3) + "<br />")
document.write("Round up (precision) = " + roundUp.toPrecision(4)  + "<br />")


//Number Objects

var numA = 10
var numB = "20"
let numC = true
let numD = false
let numE = "ABC"

document.write(numA + " is type of " + typeof numA + " and converted to number is " + Number(numA) + "<br />");
document.write(numB + " is type of " + typeof numB + " and converted to number is " + Number(numB) + "<br />");
document.write(numC + " is type of " + typeof numC + " and converted to number is " + Number(numC) + "<br />");
document.write(numD + " is type of " + typeof numD + " and converted to number is " + Number(numD) + "<br />");
document.write(numE + " is type of " + typeof numE + " and converted to number is " + Number(numE) + "<br />");

document.write("Min value for number is " + Number.MIN_VALUE+ "<br />");
document.write("Max value for number is " + Number.MAX_VALUE + "<br />");

//isFinite() -> return boolean to check if the method is finite
let finite1 = 100/0;
let finite2 = 100

document.write("100/10 is finite : " + Number.isFinite(finite1) + "<br />");
document.write("100 is finite : " + Number.isFinite(finite2) + "<br />");


//Date Object -> Local Timing
const dateObj = new Date();
//getTime(); -> Time expressed in milliseconds from 1st Jan 1970
document.write(dateObj.getTime() + "<br />");

//getFullYear() Full Year
document.write(dateObj.getFullYear() + "<br />");

//getMonth() -> o-11 Return as ArrayNumbers to Jan = 0, Feb = 1 etc
document.write(dateObj.getMonth() + "<br />");

//getDate() 1-31
document.write(dateObj.getDate() + "<br />");

//getHours() 0-23
document.write(dateObj.getHours() + "<br />");

//getMinutes() 0-59
document.write(dateObj.getMinutes() + "<br />");

//getSeconds() 0-59
document.write(dateObj.getSeconds() + "<br />");

//getMilliseconds() 0-999
document.write(dateObj.getMilliseconds() + "<br />");

//getDay() 0-6 Sunday = 0, Monday = 1 etc
document.write(dateObj.getDay() + "<br />");

//Universal Dat Format - Greenwich Mean Time
//getUTCDate() Universal Date
document.write(dateObj.getUTCDate() + " vs "+ dateObj.getDate() + "<br />");

//getUTCHours() Universal Date
document.write(dateObj.getUTCHours() + " vs "+ dateObj.getHours() +"<br />");

var str = "String test";

var str2 = new String("String test2");

document.write(str + "<br />");
//Find out the length of the string
document.write(str.length + "<br />");
//Find out the particular text in this index
document.write(str.charAt(5) + "<br />");
//See the unicode at the index
document.write(str.charCodeAt(5) + "<br />");
//indexOf -> find the index of the particular char, finds out 1st index of the character if there are multiple of the same character
document.write(str.indexOf("t") + "<br />");
//Print the last index where the char appered
document.write(str.lastIndexOf("t") + "<br />");


document.write(str2 + "<br />");
document.write(str2.length + "<br />");

//Math
//round-> returns the value of a number rounded to the nearest integer
document.write(Math.round(3.142) + "<br />");
//ceil -> always rounds a number up to the next largest integer
document.write(Math.ceil(3.142) + "<br />");
//floor ->  returns the largest integer less than or equal to a given number
document.write(Math.floor(3.142) + "<br />");
//trunc -> returns the integer part of a number by removing any fractional digits.
document.write(Math.trunc(3.742) + "<br />");
document.write(Math.trunc(3.142) + "<br />");
//sign returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument
document.write(Math.sign(3.142) + "<br />");
document.write(Math.sign(-3.142) + "<br />");
document.write(Math.sign(0) + "<br />");
//pow -> static method, given two arguments, base and exponent, returns base^exponent.
document.write(Math.pow(4, 0.5) + "<br />");
//sqrt ->  function returns the square root of a number
document.write(Math.sqrt(8) + "<br />");
//abs ->  returns the absolute value of a number
document.write(Math.abs(-2) + "<br />"); 
//sin -> function returns the sine of a number.
document.write(Math.sin(1) + "<br />"); 
//cos -> static function returns the cosine of the specified angle
document.write(Math.cos(1) + "<br />"); 
//max -> function returns the largest of the zero or more numbers given
document.write(Math.max(10, 20) + "<br />"); 
//random -> function returns a floating-point, pseudo-random number in the range
document.write(Math.random() + "<br />"); 


//Regular Expression
var regExpStr="Welcome To new york, \n welcome To USA"

var regExpPattern = /to/g
var regExpPattern2 = /are/g;

var match = regExpStr.match(regExpPattern);
var match2 = regExpStr.match(regExpPattern2);

document.write(regExpStr + "<br />");
//1 to in the string because case sensitive
document.write(match + "<br />");
//no are in the string
document.write(match2 + "<br />");


//i -> case insensitive match
var regExpPattern3 = /to/i
var match3 = regExpStr.match(regExpPattern3);
document.write(match3 + "<br />");

//m -> Do a multiline search
var regExpPattern4 = /to/m
var match4 = regExpStr.match(regExpPattern4);
document.write(match4 + "<br />");

//Regexp Brackets

var bracketState ="I Scream For Ice Cream, is that OK?"
document.write(bracketState + "<br />");

var bracketPatt = /[a-z]/g
var bracketPatt2 = /[^a-z]/g
var bracketMatch = bracketState.match(bracketPatt);
var bracketMatch2 = bracketState.match(bracketPatt2);
document.write(bracketMatch + "<br />");
document.write(bracketMatch2 + "<br />");

//Matching

document.write("<br />");
var matchStr = "Is this a\tsample sentence!\v\t33% correc\f out of \r100 to 10000%";
document.write(matchStr + "<br />");
//Metacharacters need to be used with a \

document.write("\/w <br />");
//The \w metacharacter matches word characters.
var matchReg = /\w/g;
var matching = matchStr.match(matchReg);
document.write(matching + "<br />");

document.write("\/W <br />");
//The \W metacharacter matches non-word characters.
var matchReg2 = /\W/g;
var matching2 = matchStr.match(matchReg2);
document.write(matching2 + "<br />");

document.write("\/d <br />");
//The \d metacharacter matches digits from 0 to 9.
var matchReg3 = /\d/g;
var matching3 = matchStr.match(matchReg3);
document.write(matching3 + "<br />");

document.write("\/D <br />");
//The \D metacharacter matches non-digit characters.
var matchReg4 = /\D/g;
var matching4 = matchStr.match(matchReg4);
document.write(matching4 + "<br />");

document.write("\/s <br />");
//The \s metacharacter matches whitespace character.
var matchReg5 = /\s/g;
var matching5 = matchStr.match(matchReg5);
document.write(matching5 + "<br />");

document.write("\/S <br />");
//The \S metacharacter matches non-whitespace characters.
var matchReg6 = /\S/g;
var matching6 = matchStr.match(matchReg6);
document.write(matching6 + "<br />");

document.write("\/t <br />");
//The \t metacharacter matches horizontal tabs (tabulators).
var matchReg7 = /\t/g;
var matching7 = matchStr.match(matchReg7);
document.write(matching7 + "<br />");

document.write("\/b <br />");
//The \b metacharacter matches at the beginning or end of a word.
var matchReg8 = /\bsam/g;
var matching8 = matchStr.match(matchReg8);
let result8 = matchStr.search(matching8);
document.write(matching8 + "<br />");
document.write(result8 + "<br />");

var matchReg9 = /ple\b/g;
var matching9 = matchStr.match(matchReg9);
let result9 = matchStr.search(matching9);
document.write(matching9 + "<br />");
document.write(result9 + "<br />");

document.write("\/B <br />");
// /B return the first position where it is present, NOT in the end of a word:
var matchReg11 = /\Bam/g;
var matching11 = matchStr.match(matchReg11);
let result11 = matchStr.search(matching11);
document.write(matching11 + "<br />");
document.write(result11 + "<br />");

var matchReg12 = /en\B/g;
var matching12 = matchStr.match(matchReg12);
let result12 = matchStr.search(matching12);
document.write(matching12 + "<br />");
document.write(result12 + "<br />");

document.write("\/r <br />");
//The \r metacharacter matches carriage return characters.
var matchReg10 = /\r/g;
var matching10 = matchStr.match(matchReg10);
let result10 = matchStr.search(matching10);
document.write(matching10 + "<br />");
document.write(result10 + "<br />");


document.write("\/v <br />");
//The \v metacharacter matches vertical tab characters 
var matchReg13 = /\v/g;
var matching13 = matchStr.match(matchReg13);
let result13 = matchStr.search(matching13);
document.write(matching13 + "<br />");
document.write(result13 + "<br />");

//Quantifiers
//a+
var quanReg = /a+/g;
var quan1 = matchStr.match(quanReg);
document.write(quan1 + "<br />");

//a*
var quanReg = /a*/g;
var quan1 = matchStr.match(quanReg);
document.write(quan1 + "<br />");

//a?
var quanReg = /a?/g;
var quan1 = matchStr.match(quanReg);
document.write(quan1 + "<br />");

//{x}
var quanReg = /e{1}/g;
var quan1 = matchStr.match(quanReg);
document.write(quan1 + "<br />");

//{x,y}
var quanReg = /0{0,2}/g;
var quan1 = matchStr.match(quanReg);
document.write(quan1 + "<br />");

//{x,}
var quanReg = /0{0,}/g;
var quan1 = matchStr.match(quanReg);
document.write(quan1 + "<br />");


//The n$ quantifier matches any string with n at the end of it.
var quanReg = /0%$/g;
var quan1 = matchStr.match(quanReg);
document.write(quan1 + "<br />");

/*
class Car{
    carModel = "520";
    carBrand = "BMW";
    carYear = 2022;

    dispCarInfo(){
        return(this.carModel + "    " + this.carBrand + "   " + this.carYear);
    }
}

let carObject = new Car();
document.write(carObject.dispCarInfo() + "<br>");
*/

class Car{
    constructor(){
        let carModel, carBrand, carYear;
    }

    getCarModel(){
        return this.carModel
    }
    getCarBrand(){
        return this.carBrand
    }
    getCarYear(){
        return this.carYear
    }
    setCarModel(carModel){
        this.carModel = carModel;
    }
    setCarBrand(carBrand){
        this.carBrand = carBrand;
    }
    setCarYear(carYear){
        this.carYear = carYear;
    }
    dispCarInfo(){
        return(this.carModel + "    " + this.carBrand + "   " + this.carYear);
    }
}

let carObject = new Car();
carObject.setCarModel("520");
carObject.setCarBrand("BMW");
carObject.setCarYear(2022);
document.write(carObject.dispCarInfo() + "<br>");

document.write(carObject.getCarModel()+"   "+carObject.getCarBrand() +"   "+carObject.getCarYear() + "<br>");


class Actor{
    constructor(name, age, height){
        this.name = name, 
        this.age = age, 
        this.height = height;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age
    }
    getHeight(){
        return this.height
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setHeight(height){
        this.height = height;
    }
    dispActorInfo(){
        return(this.name + "    " + this.age + "   " + this.height);
    }
    disMovieInfo(){
        return "This is in the actor class";
    }
}

//Variables defined with let cannot be redeclared.
//Variables defined with let must be Declared before use.
//Variables defined with let have Block Scope.

act = new Actor("Will Smith", 50, 180);

document.write(act.dispActorInfo() + "<br>");
document.write(act.disMovieInfo() + "<br>");


//inhertiance

class Movie extends Actor{
    

    disMovieInfo(){
        return "This is in the movie class";
    }

}

act = new Movie("Alex", 30, 190)
document.write(act.dispActorInfo() + "<br>");
document.write(act.disMovieInfo() + "<br>");

/*
function movieBudget(name, budget){
    this.name = name;
    this.budget = budget;
    let diff = 2.5

    let calculateTotalBudget = function(){
        document.write((this.budget*this.diff) + " should be the average" + this.name +"budget")
    }

    this.calcu = function(){
        calculateTotalBudget;
    }
}
mov = movieBudget("Movie 1", 100000)
mov.calcu();
*/

//Callback method
function firstMethod(callback_method){
    document.write("First method <br/>");
    callback_method();
}


function secondMethod(){
    document.write("Second method <br/>");
}

firstMethod(secondMethod);

let movie = {
    movieType : ["Romantice", "Comedy", "Horror"],
    movieScore : [1,2,3,4,5],
    movieLang : ["English","Chinese","Others"]
}

function showMovie(cbMethod1, cbMethod2){
    document.write(`The ${movie.movieLang[0]} ${movie.movieType[1]} has a score of ${movie.movieScore[4]} <br>`)
    cbMethod1(cbMethod2);
}

function startedShowing(cbMethod){
    document.write("The movie has started showing! <br>")
    cbMethod();
}

function endShowing(){
    document.write("The movie has ended showing! <br>")
}

showMovie(startedShowing, endShowing);

//Promise

let movieShowing = true;

let showingTime = (time, work) =>{
    return new Promise((resolve, reject) =>{
        if(movieShowing){
            setTimeout(()=> {
                resolve(work());
            }, time)
        }
        else{
            reject(console.log(`Unable to find ${movie.movieType[1]}`))
        }
    })   
}

showingTime(5000, () =>{
    console.log(`${movie.movieType[2]} is now showing!`);
})
.then(() => {
    return showingTime(2000, ()=>{
        console.log("Start movie")
    })
})
.then(() => {
    return showingTime(3000, ()=>{
        console.log("Showing in progress")
    })
})
.then(() => {
    return showingTime(2000, ()=>{
        console.log("End movie")
    })
})
.catch(() => {
    console.log("Movie is not showing!")
})
.finally(() => {
    console.log("Movie theatre is now close!")
})

