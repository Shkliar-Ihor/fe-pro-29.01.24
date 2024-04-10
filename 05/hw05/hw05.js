//Перепишіть цей код використовуючи let const~
// Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// const counter = '12345';

// for(let i=0; i < 5; i++){
//     console.log(i);
// }


// Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }

// let message = 'test';
// function example(){
//     if(true){
//         let message = 'Hello world!'
//         console.log(message);
//     }   
// }

// console.log(message);
// example();


// Використовуючи for in  виведіть значення з обєктку в console.log

// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };
// for(let key in person){
//     console.log(`key: ${key} value: ${person[key]}`);
// }


//Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];

// for(let student of students){
    // tr
        // td
    // { name: 'Alice', age: 20, grade: 'A' },
//     console.log(student);
//     for(let key in student){
//         console.log(`Info: ${student[key]}`);
//     }
// }


// Завдання на map
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

// let numbersArr = [1, 2, 3, 4, 5];
// let squareNumbersArr = numbersArr.map(number=>number*number);
// console.log(squareNumbersArr);


// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач,
// і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value'

// function mapWithTransform(array, callback){
//     let newArr = array.map(item=>callback(item));
//     // return array.map(item=>callback(item));
//     return newArr;
// }

// let numbersArr = [1, 2, 3, 4, 5];
// let newValueArr = mapWithTransform(numbersArr, item=>`new value: ${item}`);
// console.log(newValueArr)


// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30]

// const numberArr = [10,20,30];
// let summ = 0;
// numberArr.forEach(number => summ=summ+number);
// console.log(summ);


// Додаткове завдання:
// Напишіть функцію, яка використовує forEach для створення масиву, що містить лише унікальні елементи вихідного масиву.
// Тобто якщо предаєте numberArr = [10,20,30, 20, 10] отримуєте numberArr = [10,20,30]

// let numberArrUnique = [10,20,30, 20, 10];
// function filterArrayFn(array){
//     let uniqueValue = [];
//     array.forEach(item =>{
//         if(!uniqueValue.includes(item)){
//             uniqueValue.push(item);
//         }
//     });
//     return uniqueValue;
// }

// console.log(filterArrayFn(numberArrUnique));


// Напишіть функцію, що приймає масив чисел і колбек-функцію. Функція повинна використовувати for...of для обходу по масиву та викликати колбек-функцію для кожного елемента. Колбек-функція повинна повертати true або false, вказуючи, чи слід включити поточний елемент до нового масиву.

// Передавши масив  [1, 2, 3, 4, 5] і колбек-функція, що відбирає парні числа.

// повині отримати  новий масив з парними числами [2, 4].


function filterArrayFn(array, callback){
    let numbersValue = [];
    for(let item of array){
        if(callback(item)){
            numbersValue.push(item);
        }
    }
    return numbersValue;
}

let newArr = [1, 2, 3, 4, 5];
let numbers = filterArrayFn(newArr, (num)=>num%2===0);

console.log(numbers);