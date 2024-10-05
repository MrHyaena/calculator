// Three variables for cycling numbers

let number = 0;
let result = 0;
let stringNumber = "";
let operator = "+";
let finalResult = 0;

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
    stringNumber = stringNumber + "1";
    number = Number(stringNumber);

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
});

two.addEventListener("click", () => {
    stringNumber = stringNumber + "2";
    number = Number(stringNumber);

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
});

three.addEventListener("click", () => {
    stringNumber = stringNumber + "3";
    number = Number(stringNumber);

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
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

// Functions for clicking action buttons -----------------------------

plus.addEventListener("click", () => {
    operator = "+";
    operators();
});

minus.addEventListener("click", () => {
    operator = "-";
});

nasobeni.addEventListener("click", () => {
    operator = "*";
});

deleni.addEventListener("click", () => {
    operator = "/";
});

// Clicking Equal button ---------------------------------------------------

equal.addEventListener("click", () => {
    
    countingOperations()
    finalResult = result;
    number = 0;
    result = 0;
    stringNumber = "";

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
});

// Function for counting ---------------------------------------------

function countingOperations() {
    if (operator == "+") {
        result = result + number;
    } else if (operator == "-") {
        result = result - number;
    } else if (operator == "*") {
        result = result * number;
    } else {
        result = result / number;
    }
};

function operators() {
    countingOperations();
    number = 0;
    stringNumber = "";
};





