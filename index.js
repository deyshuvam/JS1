let num1El=document.getElementById("num1-el");
let num2El=document.getElementById("num2-el");
let outEl=document.getElementById("out-el");

var v1=prompt("Enter first number :: ");
var v2=prompt("Enter second number :: ");

num1El.innerText += " " + v1;
num2El.innerText += " " + v2;

var n1=parseFloat(v1);
var n2=parseFloat(v2);

function add() {
    var n3 = n1+n2;
    outEl.innerText += " " + n3;
}

function sub() {
    var n3 = n1-n2;
    outEl.innerText += " " + n3;
}

function mul() {
    var n3 = n1*n2;
    outEl.innerText += " " + n3;
}

function div() {
    var n3 = n1/n2;
    outEl.innerText += " " + n3;
}