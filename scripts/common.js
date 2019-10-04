//Задание 1. Используется алгоритм решето Эратосфена

function print100SimpleNumbers () {

    let Arr = [];

    for(i=1; i<=100; i++) {  
    Arr.push(i);
    }

    let p = 2;
    let indexOfP = p - 1;

    while ( p<50 ) {
        for(let j = indexOfP + p; j <= 99; j += p ) {
            Arr[j] = 0;
        }
        for(let j = indexOfP + 1; j <= 99; j++ ){
            if ( Arr[j] !== 0 ) {
                p = Arr[j];
                indexOfP = j;
                break;
            }
        }
    }

    Arr.forEach(el => {
        el !== 0 ? console.log(el) : 0;
    });

}

//Задание 3. Игра угадай число

function game () {

    let x = Math.trunc((Math.random() * 10000));
    
    let playerNum = +prompt("Игра угадай число. Компьютер загадал четырехзначное число. Для выхода из игры введите -1. Введите вашу догадку:");

    let countOfTries = 1;

    play(playerNum);

    function play(playerNum) {
        if (playerNum === -1) {
            alert("Вы вышли из игры!");
            return 0;
        }
        if (x == playerNum) {
            alert(`Вы угадали! Поздравляем! Число попыток ${countOfTries}`);
        }
        else if (x > playerNum) {
            let playerNumNew = +prompt("Меньше! Введите следующую догадку:");
            countOfTries++;
            play(playerNumNew);
        }
        else {
            let playerNumNew = +prompt("Больше! Введите следующую догадку:");
            countOfTries++;
            play(playerNumNew);
        }
    }

    let cont = +prompt("Хотите сыграть еще раз? 1 - да, 0 - нет.");

    if (cont > 0) {
        game();
    }
    else {
        return 0;
    }

}

// Задание 4. Числа от 1 до 10

function Numbers1To10 () {
    for( let i = 1; i<=10; console.log(i++)) {

    }
}

// Задание 5. Пирамида

function DrawPyramid () {

    let cross = "X";
    let outputString = cross;

    for(i = 1; i<=20; i++) {
        console.log(outputString);
        outputString += cross;
    }
}