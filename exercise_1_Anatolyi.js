// 1. Написать скриптик, который сосчитает
// и выведет результат от возведения 2 в степень 10, начиная со степени 1
let x = 1;

function step_1(num){
    
    for(let i = 1; i<=num; i++){
        
        x = x * 2;
    }
    return console.log(x);
}

step_1(10);

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень,
// в которую будет возводиться число 2

function step(num){
    return console.log(2**num);
}

step(10);

//2. Написать скрипт, который выведет 5 строк в консоль таким образом,
// чтобы в первой строчке выводилось :), во второй :):) и так далее

let smile = ":)";

function moreSmile(x){
    let result = "";
    for (let i = 1; i <= 5; i++) {
       result += x;
       console.log(result);
    }
}

moreSmile(smile);

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
//которая и будет выводиться в консоль (как в условии смайлик),
// а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)

function printSmile(x, kil){
    let result = "";
    for (let i = 1; i <= kil; i++) {
       result += x;
       console.log(result);
    }
}

printSmile(":)", 6);

//3**.  Написать функцию, которая принимает на вход слово. 
//Задача функции посчитать и вывести в консоль, сколько в слове гласных,
// и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв

//Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    var gl = 0, 
        sogl = 0;
    const glasn = ['a','e','i','o','u','y'];
    const soglasn = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    for (let char of word.toLowerCase()) {
        if(glasn.includes(char)) {
            gl++
        } 
        else if(soglasn.includes(char)) {
            sogl++
        }
    }
    return console.log(`Слово ${word} состоит из ${gl} гласных и ${sogl} согласных букв`)
}
getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-list");

//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)

//Проверки: 'abba', 'Abba'

function isPalindrom(str) {
    var strorg = str.toLowerCase;
    var strreq = strorg.split().reverse().join();
       if (strorg === strreq) {
        console.log("It is palindrom") 
    }
    else {
        console.log('It is not palindrom');
    }
}

isPalindrom("Abba");
isPalindrom("Hello");

// у меня что-то не получается в 4** , со split .. не понимаю((
