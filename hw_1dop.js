//let ageUser = prompt("Please, enter you age","0");

/*HW_1* 
Задания с разным количеством звездочек:)
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61

2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции 
проверялся тип данных. И если он не Number - кидалась ошибка.

3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой
лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится 
используя функцию prompt в привязанной верстке.*/

let checkAge = function(ageUser){
    if (typeof(+ageUser) == "number"){
        if (ageUser < 18){

            console.log(`You don’t have access cause your age is ${ageUser}. It’s less then`)
        } 
        else if ((ageUser >=18) && (ageUser < 60)){

            console.log(`Welcome!`)
        }
        else if (ageUser >= 60){

            console.log("Keep calm and look Culture channel")
         }
        else console.log(`Technical work`)
    }

}

checkAge("17");
checkAge(18);
checkAge(60);
