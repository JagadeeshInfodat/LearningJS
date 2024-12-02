document.getElementById("h1s").textContent = `Hello  Jagadeesh`;
//document.getElementById("p1s").textContent='This is jagadeesh, learning JS with Brocode tutorials';
var names = 'Jagadeesh';
var age = 24;
var IsStudent = true;
console.log(typeof IsStudent)

document.getElementById("p1").textContent = `Hi all, My name is ${names}.`
document.getElementById("p2").textContent = `my age is ${age}.`
document.getElementById("p3").textContent = `im not a student: ${IsStudent}.`
//operators:
var value = 2;

value **= 2;
console.log(value);  //the value will be 2^2=4.  
//Note **--> represents exponentiation operator.

//Prefrences:
//Parenthesis ()
//exponents
//Multiplication and division and modulus
//Addition & Substraction.

var res = 1 + 2 * 3 + 4 ** 2;  //1+2*3+16  --> 1+6+16  -->23
console.log(`The value of res is ${res}.`);
//Day -2   (12/11/24) Accepting using inputs.

//1.Easiest way is to prompt & 2. Professional way 
// let username =window.prompt("What's your name?");

// console.log(username);
let x;
let y;
let z;
x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

document.getElementById("subButton").onclick = function f1() {
    var name = document.getElementById("userName").value;
    var age = document.getElementById("age").value;
    age = Number(age);
    if (age > 18) {
        age = "Major";
    }
    else {
        age = "Minor";

    }
    document.getElementById("heading1").textContent = `Hello Mr ${name}, your are ${age}`

}

const PI = 3.14;
let circumference;

document.getElementById("btnSubmit").onclick = function () {
    var rad = document.getElementById("rad").value;

    radius = Number(rad);
    circumference = 2 * PI * radius;
    document.getElementById("circum").textContent = circumference;

}


{/* <h3 id="countResult"></h3>
<button  id="decButton">Decrement</button>
<button id="resButton">Rest</button>
<button id="increButton">Increment</button> */}

let Initialvalue = 0;
// document.getElementById('countResult').textContent = Initialvalue;

let countLabel = document.getElementById("countResult");

document.getElementById("decButton").onclick = function de1() {
    let currentValue = parseInt(countLabel.textContent, 10);
    currentValue--;
    countLabel.textContent = currentValue;
}
document.getElementById("resButton").onclick = function res() {
    countLabel.textContent = Initialvalue;
}
document.getElementById("increButton").onclick = function inc() {
    let currentValue = parseInt(countLabel.textContent, 10);
    currentValue++;

    countLabel.textContent = currentValue;

}


//functions:

function Fun2() {
    return "Function Called;";
}
document.getElementById('Resl').textContent = Fun2();
function Fun3(a, b) {
    return a * b;
}
document.getElementById('Resl2').textContent = Fun3(2, 3);

//class Object{car} ,Properties{car.Black, car.color,car.Price,car.size..etc}, methods{car.start(),car.move(), car.stop() }

const Person = {
    Name: 'Ram',
    Age: 23,
    Behavoiur: null
}
Person.color = 'Black';   //adding 
//delete Person.Behavoiur -->  delete keyword deletes both key and its value.

// document.getElementById('props').textContent=`His name is ${Person.Name} and age is ${Person.Age} with ${Person.color} tone.` ;
document.getElementById('props').textContent = Object.entries(Person);


const Dream = {
    Device: 'Camera',
    Price: 1.5,
    DeviceProp: {
        Name: 'Sony 6700',
        LYear: 2021

    }
}


document.getElementById('nestedObj').textContent = `My dream ${Dream.Device} is a ${Dream.DeviceProp.Name} and it is worth of ${Dream.Price}L.`

const Car = {
    Device: 'Camera',
    Price: 1.5,
    DeviceProp: {
        Name: 'Sony 6700',
        LYear: 2021

    },
    Start:function(){
        return 'Car started';
    },
    Stop:function()
    {
        return 'Stopped';
    },
    AllDetails:function()
    {
return 'My dream'+ this.Price+ 'of price'+ this.Price +'launched in  the year' + this.LYear+'.' ;
    }
}

// document.getElementById('objMethods').textContent=
// `I have a ${Car.Device} and it is worth ${Car.Price}, it was launched in the year ${Car.DeviceProp.LYear}.<br>
// It having multiple methods of ${Car.Start()} and it can ${Car.Stop()} `;

document.getElementById('objMethods').textContent=Car.AllDetails();
// document.getElementById('objMethods').textContent=Object.entries(Car);
// document.getElementById('objMethods').textContent=Car.AllDetails;  --> if we declare like this it returns "function Definition";

const Pen={
    Name:'Celtos',
    Price:'2/- rs',
    Color:'Black'
}
var Values="";

for(let x in Pen)
{
    Values+=Pen[x]+ " ";
}

document.getElementById('objDisplay').textContent=Values;

//without looping -- using object.Varables()
//document.getElementById("objValues").innerHTML = myArray;
// const Pens={
//     Name:'Celtos',
//     Price:'2/- rs',
//     Color:'Black'
// }

// const ArrayValues=object.values(Pens);
// document.getElementById('objValues;').textContent=ArrayValues;

//above one is didnot worked out.

//objConstructor Function():
function Persons(name,age,color,status)
{
this.fname=name,
this.age=age,
this.color=color,
this.status=status;
};
const F1=new Persons('Suresh',23,'Brown',true);
const F2=new Persons('Hemanth',23,'Black',true);
const F3=new Persons('Vivek',23,'Dark black',true);
 //document.getElementById("objConstructor").textContent=`His name is ${Friend1.fname}, his color ${Friend1.color} and his age is about ${Friend1.age}.`
//document.getElementById('objConstructor').textContent="jkkk";
document.getElementById("objConstructor").textContent=`My friends are ${F1.fname}, ${F2.fname} and ${F3.fname} these are my B.Tech batch mates.`;

//Constructor Function Methods():


function _PerSon(name,age,color,status)
{
this.fname=name,
this.age=age,
this.color=color,
this.status=status;
this. AllDetails=function()
{
     return `His name is  ${this.fname} and his is ${this.age} old.`;
    // return this.fname+this.age;
}
};

const F18=new _PerSon('Suresh',23,'Brown',true);
document.getElementById("constructoruFunMehtod").textContent=F18.AllDetails();

//Events:
//eventsExam
function getDate()
{
    document.getElementById('getDatebtn').textContent=Date();
}

var strFun1="This is Jagadeesh";
var strFun2="I\'m learning JS";
var strFun3="This is my lovely \"PC\"";
var strFun4="Get me a new \r Camera";
var strFun5="This is \n new line";
var strFun6="spaces b/w \t  them ";
document.getElementById("strFun11").textContent=strFun1
document.getElementById("strFun21").textContent=strFun2
document.getElementById("strFun31").textContent=strFun3
document.getElementById("strFun41").textContent=strFun4
document.getElementById("strFun51").textContent=strFun5
document.getElementById("strFun61").textContent=strFun6


var atFun="SONY A 6700 camera."

var atRes1=atFun.at(3);
var atRes2=atFun.at(-3);
var atRes3=atFun.at(0);
var atFun1="";
var atRes4=atFun1.at(0);


document.getElementById("strAt1").textContent=atRes1;
document.getElementById("strAt2").textContent=atRes2;
document.getElementById("strAt3").textContent=atRes3;
document.getElementById("strAt4").textContent=atRes4;
console.log("at()"+atRes4);
