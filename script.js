// Three variables for cycling numbers

let start = 0;
let number = 0;
let end = 0;
let operator = "";

// Basic calculator functions 

function plusFunction(a, b) {
    c = a + b
    return c;
};

function minusFunction(a, b) {
    c = a - b
    return c;
};

function nasobeniFunction(a, b) {
    c = a * b
    return c;
};

function deleniFunction(a, b) {
    c = a / b
    return c;
};

// Here I am declaring all the constants that I am going to work with

const display = document.querySelector("#display");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const nasobeni = document.querySelector("#nasobeni");
const deleni = document.querySelector("#deleni");

const equal = document.querySelector("#equal");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const numbers = document.querySelector("#numbers");

// Functions for clicking number buttons

one.addEventListener("click", () => {
    number = 1;
    console.log(number + " number");
    console.log(start + " start");
    console.log(end + " end");
});

two.addEventListener("click", () => {
    number = 2;
    console.log(number + " number");
    console.log(start + " start");
    console.log(end + " end");
});

three.addEventListener("click", () => {
    number = 3;
    console.log(number + " number");
    console.log(start + " start");
    console.log(end + " end");
});

four.addEventListener("click", () => {
    number = 4;
});

five.addEventListener("click", () => {
    number = 5;
});

six.addEventListener("click", () => {
    number = 6;
});

seven.addEventListener("click", () => {
    number = 7;
});

eight.addEventListener("click", () => {
    number = 8;
});

nine.addEventListener("click", () => {
    number = 9;
});

zero.addEventListener("click", () => {
    number = 0;
});

// Functions for clicking action buttons

plus.addEventListener("click", () => {
    operator = "+";
    start = end;
    
});

minus.addEventListener("click", () => {
    operator = "-";
    start = end;
    
});

nasobeni.addEventListener("click", () => {
    operator = "*";
    start = end;
    
});

deleni.addEventListener("click", () => {
    operator = "/";
    start = end;
    
});

equal.addEventListener("click", () => {
    if (operator == "+") {
        end = start + number;
    } else if (operator == "-") {
        end = start - number;
    } else if (operator == "*") {
        end = start * number;
    } else {
        end = start / number;
    }
    console.log(number + " number");
    console.log(start + " start");
    console.log(end + " end");
});





