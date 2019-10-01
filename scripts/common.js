// Задание 1
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2 Используется префиксная форма оператора ++, она возвращает новое значение после инкремента
//d = b++; alert(d);           // 1 Используется постфиксная форма оператора ++, она возвращает старое значение
//c = (2+ ++a); alert(c);      // 5 a после инкремента стало равно 2, после префиксного инкремента возвращается 3, 3+2 = 5
//d = (2+ b++); alert(d);      // 4 b после инкремента стало равно 2, после постфиксного инкремента возвращается старое значение - 2, 2+2 = 4 
//alert(a);                    // 3 к переменным a и b два раза применяли оператор инкремента поэтому их значение равно 3
//alert(b);                    // 3

//задание 2

//let a = 2;
//let x = 1 + (a *= 2); // Значение x равно 5, составное присваивание вернет 4 + 1 = 5
//console.log(x); // 5

// Задание 3

let a = -3;
let b = -5;

if ((a>=0) && (b>=0)) {
    console.log(a - b);
}
else if ((a<=0) && (b<=0)) {
    console.log(a * b);
}
else {
    console.log(a + b);
}

// Задание 4

let x = 7;

switch(x) {
    case(1): 
        console.log(1);
    case(2): 
        console.log(2);
    case(3): 
        console.log(3);
    case(4): 
        console.log(4);
    case(5): 
        console.log(5);
    case(6): 
        console.log(6);
    case(7): 
        console.log(7);
    case(8):  
        console.log(8);
    case(9): 
        console.log(9);
    case(10): 
        console.log(10);
    case(11): 
        console.log(11);
    case(12): 
        console.log(12);
    case(13): 
        console.log(13);
    case(14): 
        console.log(14);
    case(15): 
        console.log(15);   
}

// Задание 5

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
        case "Сумма":
            return sum(a,b);
            break;
        case "Разность":
            return dif(a,b);
            break;
        case "Деление":
            return div(a,b);
            break;
        case "Умножение":
            return mul(a,b);
            break;
        default:
            return "Операция не распознана";
    }
}