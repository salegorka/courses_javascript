let operand = "";
let leftOperand = "";
let currentOper = null;
let display = document.querySelector(".calc__display");
let res = 0;
let currentStep = "first";
let suggestedNextValue = "number";

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
    }
}


function createOperand (digit) {
    operand += digit;
    display.innerHTML += digit;
    suggestedNextValue = "operOrNumber";
}

function operation (op) {
    
    if (suggestedNextValue == "operOrNumber") {

        if (currentStep == "second") {
            leftOperand = mathOperation(+leftOperand, +operand, currentOper);
            operand = "";

            currentOper = op;
            display.innerHTML += op;
        } else {
            leftOperand = operand;
            currentOper= op;

            operand = "";
            currentStep = "second";
            display.innerHTML += op;
        }

    suggestedNextValue = "Number";

    } else {
        display.innerHTML += "Ошибка: ожидается число. Начинайте заново!" + "<br>";
        operand = "";
        leftOperand = "";

        currentStep = "first";
    }
}

function operationEqual() {
    if (suggestedNextValue == "operOrNumber") {

        res = mathOperation(+leftOperand, +operand, currentOper);

        leftOperand = "";
        operand = "";
        currentStep = "first";

        display.innerHTML += "=" + res;
        display.innerHTML += "<br>";
        res = "";

        suggestedNextValue = "Number";
    } else {
        display.innerHTML += "Ошибка: ожидается число. Начинайте заново!" + "<br>";
        operand = "";
        leftOperand = "";

        currentStep = "first";
    }
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