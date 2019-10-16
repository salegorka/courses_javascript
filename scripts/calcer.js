let operand = "";
let operandHasPoint = false;
let operandNegative = false;
let leftOperand = "";
let currentOper = null;
let display = document.querySelector(".calc__display");
let res = 0;
let currentStep = "first";
let suggestedNextValue = {
    equal: 0,
    digit: 1,
    oper: 0,
}

document.querySelector(".calc__keyboard").addEventListener("click", buttonClick);

function buttonClick (event) {
    switch (event.target.dataset["value"]){
        case "1":
            createOperand("1");
            break;
        case "2":
            createOperand("2");
            break;
        case "3":
            createOperand("3");
            break;
        case "4":
            createOperand("4");
            break;
        case "5":
            createOperand("5");
            break;
        case "6":
            createOperand("6");
            break;            
        case "7":
            createOperand("7");
            break;
        case "8":
            createOperand("8");
            break;
        case "9":
            createOperand("9");
            break;
        case "0":
            createOperand("0");
            break;
        case ".":
            addPoint();
            break;
        case "+-":
            makeNegative();
            break;
        case "+":
            operation("+");
            break;
        case "-":
            operation("-");
            break; 
        case "*":
            operation("*");
            break;
        case "/":
            operation("/");
            break; 
        case "=":
            operationEqual();
            break;
        case "c":
            clear();
            break;       
    }
}


function createOperand (digit) {

    if (currentStep == "equal") {
        currentStep = "first";
    }
    
    operand += digit;
    display.innerHTML += digit;
    suggestedNextValue.oper = 1;
    suggestedNextValue.digit = 1;

    if (currentStep =="second") {
        suggestedNextValue.equal = 1;
    }
    else {
        suggestedNextValue.equal = 0;
    }
}

function addPoint () {
    if (!operandHasPoint) {
        operand += ".";
        display.innerHTML += ".";

        suggestedNextValue.oper = 0;
        suggestedNextValue.digit = 1;
        suggestedNextValue.equal = 0;

        operandHasPoint = true;
    }
}

function makeNegative () {
    if (operandNegative) {

        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-operand.length);

        operand = operand.slice(1, operand.length);

        display.innerHTML += operand;

        operandNegative = false;
    }
    else {

        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-operand.length);

        operand = "-" + operand;

        display.innerHTML += operand;

        operandNegative = true;
    }

    suggestedNextValue.digit = 1;
    suggestedNextValue.equal = 1;
    suggestedNextValue.oper = 1;
}

function operation (op) {
    
    if (suggestedNextValue.oper === 1) {

        if (currentStep == "second") {
            leftOperand = mathOperation(+leftOperand, +operand, currentOper);
            operand = "";
            operandHasPoint = false;

            currentOper = op;
            display.innerHTML += op;
        } else if (currentStep == "first") {
            leftOperand = operand;
            currentOper= op;

            operand = "";
            operandHasPoint = false;
            currentStep = "second";
            display.innerHTML += op;
        }
        else if (currentStep = "equal") {

            leftOperand = res;
            currentOper = op;

            display.innerHTML += leftOperand + op;

            currentStep = "second";

        }

    suggestedNextValue.oper = 0;
    suggestedNextValue.digit = 1;
    suggestedNextValue.equal = 0;
    
    }

}

function operationEqual() {

    if (suggestedNextValue.equal == 1) {

        res = mathOperation(+leftOperand, +operand, currentOper);

        leftOperand = "";
        operand = "";
        operandHasPoint = false;
        currentStep = "equal";

        display.innerHTML += "=" + res;
        display.innerHTML += "<br>";

        suggestedNextValue.digit = 1;
        suggestedNextValue.equal = 0;
        suggestedNextValue.oper = 1;

    }
}

function clear() {
    display.innerHTML = "";
    ledtOperand = "";
    operand = "";

    currentStep = "first";
    suggestedNextValue.digit = 1;
    suggestedNextValue.oper = 0;
    suggestedNextValue.equal = 0;
}

function sum(a, b) {
    return a + b;
}

function dif(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}


function mathOperation (a, b, oper) {
    switch (oper) {
        case "+":
            return sum(a,b);
            break;
        case "-":
            return dif(a,b);
            break;
        case "/":
            return div(a,b);
            break;
        case "*":
            return mul(a,b);
            break;
        default:
            return "Операция не распознана";
    }
}