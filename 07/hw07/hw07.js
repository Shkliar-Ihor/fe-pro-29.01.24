// Домашня робота:
// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

// let string = 'rock stone pebble';
// let transform = string.toUpperCase();
// let newString = transform.split(' ');
// console.log(newString);


// Перевірка Високосного Року
// Реалізуйте функцію, яка перевіряє, чи є рік, заданий датою, високосним.

// function leapYear(year){
//     let date = new Date(year, 1, 29);
//     if(date.getMonth() === 1){
//         alert(`Рік ${date.getFullYear()} вискосний`);
//     }
//     else{
//         alert(`Рік ${date.getFullYear()} не вискосний`);
//     }
// }

// let typeYear = prompt('Впишіть рік');
// leapYear(typeYear);


// Отримання Назви Місяця
// Напишіть функцію, яка приймає об'єкт Date і повертає назву місяця англійською мовою.

// let date = new Date();
// console.log(date.getMonth);
// let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// function months(item, array){
//     for(let i=0; i<array.length; i++){
//         let element = array[i];
//         if (i === item.getMonth()) {
//            console.log(`${date.getMonth()} month is ${array[i]}`);
//         }
//     }
// }

// months(date, Months);


// Додавання Днів до Дати
// Створіть функцію, яка додає певну кількість днів до заданої дати і повертає нову дату.

// function addDays(date, addFewDays){
// let date1 = new Date(date);
// let newDate = date1.getDate() + addFewDays;
// date1.setDate(newDate);
// return date1;
// }

// let date2 = new Date();
// console.log(date2);
// let fewDays = Number(prompt('Введіть число днів'))

// console.log(addDays(date2, fewDays));


// створіть список ul з 5 елементами li всередині.

// window.onload = function(){ 
//     // - перший елемент списку
//     let firstLiEl = document.querySelector("li:first-child");   
//     console.log(firstLiEl);
//     // - останній елемент списку
//     let lastLiEl = document.querySelector("li:last-child");
//     console.log(lastLiEl);
//     // - 3 елемент списку
//     let thirdLiEl = document.querySelector("li:nth-child(3)");
//     console.log(thirdLiEl);
//     // За допомогою querySelectorAll
//     // - всі елементи li в списку
//     let allLi = document.querySelectorAll("li");
//     console.log(allLi);
//      // - конвертуйте вибрані елменти в массив
//     let liElement = Array.from(allLi);
//     console.log(liElement);
// }


// Створіть на сторінці елемент який вибирається ціми селекторами
let listItems = document.querySelectorAll('ul.nav > li');
console.log(listItems);

let listItem = document.querySelectorAll('li:nth-child(2)');
console.log(listItem);