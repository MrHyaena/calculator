// Three variables for cycling numbers

let number = 0;
let result = null;
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
    display.textContent = number;

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
});

two.addEventListener("click", () => {
    stringNumber = stringNumber + "2";
    number = Number(stringNumber);
    display.textContent = number;

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
});

three.addEventListener("click", () => {
    stringNumber = stringNumber + "3";
    number = Number(stringNumber);
    display.textContent = number;

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
});

four.addEventListener("click", () => {
    stringNumber = stringNumber + "4";
    number = Number(stringNumber);
    display.textContent = number;
});

five.addEventListener("click", () => {
    stringNumber = stringNumber + "5";
    number = Number(stringNumber);
    display.textContent = number;
});

six.addEventListener("click", () => {
    stringNumber = stringNumber + "6";
    number = Number(stringNumber);
    display.textContent = number;
});

seven.addEventListener("click", () => {
    stringNumber = stringNumber + "7";
    number = Number(stringNumber);
    display.textContent = number;
});

eight.addEventListener("click", () => {
    stringNumber = stringNumber + "8";
    number = Number(stringNumber);
    display.textContent = number;
});

nine.addEventListener("click", () => {
    stringNumber = stringNumber + "9";
    number = Number(stringNumber);
    display.textContent = number;
});

zero.addEventListener("click", () => {
    stringNumber = stringNumber + "0";
    number = Number(stringNumber);
    display.textContent = number;
});

// Functions for clicking action buttons -----------------------------

plus.addEventListener("click", () => {
    operator = "+";
    operators();
});

minus.addEventListener("click", () => {
    operator = "-";
    operators();
});

nasobeni.addEventListener("click", () => {
    operator = "*";
    operators();
});

deleni.addEventListener("click", () => {
    operator = "/";
    operators();
});

// Clicking Equal button ---------------------------------------------------

equal.addEventListener("click", () => {
    
    countingOperations()
    finalResult = result;
    number = 0;
    result = null;
    stringNumber = "";
    display.textContent = finalResult;

    console.log(number + " number");
    console.log(result + " result");
    console.log(finalResult + " finalResult");
});

// Functions for counting ---------------------------------------------

function countingOperations() {
    if (operator == "+") {
        if (result === null) {
            result = 0;
        }
        result = result + number;
    } else if (operator == "-") {
        if (result === null) {
            result = number;
        }
        result = result - number;
    } else if (operator == "*") {
        if (result === null) {
            result = 1;
        }
        result = result * number;
    } else {
        if (result === null) {
            result = number;
            } else {
        result = result / number;
        if (result === Infinity) {
            finalResult = "ERROR, div by zero"
            number = 0;
            result = "ERROR";
            stringNumber = "";

        }
        }
    }
};

function operators() {
    countingOperations();
    number = 0;
    stringNumber = "";
};





