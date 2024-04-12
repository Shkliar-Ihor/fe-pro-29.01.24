// Домашня робота:
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

// class Person{
//     constructor(name, age){
//         this._name = name;
//         this._age = age;
// }}

// let userInfo = new Person('John', 30);

// console.log(userInfo);


// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи в console.log

// class Person{
//     constructor(name, age){
//         this._name = name;
//         this._age = age;
//     }
//     sayHi(){
//         console.log(`Hello ${this._name}`);
//     }
// }

// let userInfo = new Person('John', 30);

// console.log(userInfo);
// userInfo.sayHi();


// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про студента

// class Person{
//     constructor(name, age){
//         this._name = name;
//         this._age = age;
//     }
// }

// class Student extends Person{
//     constructor(name, age, studentId){
//         super(name, age);
//         this._studentId = studentId;
//     }
//     study(){
//         console.log(`Student info: ${this._name}, ${this._age}, ${this._studentId}`);
//     }
// }

// let newUser = new Person('John', 30);
// let student = new Student('John', 30, 482349);
// student.study();


// 4 Задачі для практики forEach, reverse  Виведіть значення з масиву в зворотньому порядку

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(item){
//     numbers.reverse();
// });

// console.log(numbers);


// 5  Задачі для практики map та Math.round
//  Маєте масив чисел з плаваючою комою. Використовуйте map разом з Math.round, щоб створити новий масив, в якому кожне число буде округлене до найближчого цілого.

// let array = [3.5, 2.3, 6.7, 19.2];
// let roundNumbers = array.map(Math.round);

// console.log(roundNumbers);


// Додаткове завдання:
// 1. Вгадай число
// Гравець має вгадати число, яке програма випадково генерує в заданому діапазоні від 1 до 20.
// Після кожної спроби програма повідомляє, чи є загадане число більшим чи меншим від введеного. Гра триває до вгадування числа 

let userGuess = prompt('Відгадайте число в діапазоні від 1 до 20');

function random(){
    return Math.floor(Math.random()*20);
}
console.log(random());

if(userGuess<Math.random() || userGuess>Math.random()){
    alert('Ви не вгадали число, спробуйте ще раз!');
}
else{
    alert('Вітаю! Ви ввели правильне число');
}