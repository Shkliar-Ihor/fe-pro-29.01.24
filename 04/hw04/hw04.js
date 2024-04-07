//Перше завдання
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і
// викликає цю функцію для кожного елемента масиву.

// let users = ['Андрій', 'Тетяна', 'Вадим'];

// function hiUser(user){
//     console.log(`Вітаю ${user}`);
// }
// function welcomeUser(users, hiUser){
//     for(let i=0;i < users.length;i++){
//         hiUser(users[i]);
//     }
// }

// welcomeUser(users, hiUser);

//Друге завдання
// Стрілкові функції:
// перепишіть попередню функцію в стрілкову


// let users = ['Андрій', 'Тетяна', 'Вадим'];

// hiUser = (users)=>{console.log(`Вітаю ${users}`)};
// welcomeUser = (users, hiUsers)=>{for(let i=0;i < users.length;i++){hiUser(users[i]);}}

// welcomeUser(users, hiUser);


// Перепишіть стрілкову функцію в звичайну 
// const multiplyValues = (a, b, c) => a * b * c;

// function multiplyValues(a, b, c){
//     return(a*b*c);
// }


//Завдання з push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

// let newArr = [];
// let numbersArr = [1, 2, , , 5, 6];

// for(let i=0;i<numbersArr.length;i++){
//     newArr.push(numbersArr[i]);
// }

// console.log(newArr);


// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

// function newElement(newArr, element){
//     newArr.push(element);
//     return newArr;
// }


// Завдання з pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

// let array = [];
// let newArray = [5, 4, 9, 13];

// for(let i=0;i<newArray.length;i++){
//     array.push(newArray[i]);
// }
// array.pop();
// console.log(array);


// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

// let array = [1, , 5, , 3];

// function lastElement(array){
//     return array;
// }
// array.pop();
// console.log(array);


// Завдання з unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

// let fruits = [];
// fruits.unshift('Apple');
// fruits.unshift('Banana');
// fruits.unshift('Pear');
// fruits.unshift('Orange');
// fruits.unshift('Lemon');

// console.log(fruits);

// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

// let array = ['potato', 'carrot', 'cabbage', 'beetroot'];

// function addEl(array, beans){
//     return array;
// }
// array.unshift('beans');

// console.log(array);


// Завдання з shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

// let fruits = [];
// fruits.unshift('Apple');
// fruits.unshift('Banana');
// fruits.unshift('Pear');
// fruits.unshift('Orange');
// fruits.unshift('Lemon');

// fruits.shift();

// console.log(fruits);

// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

// let array = ['potato', 'carrot', 'cabbage', 'beetroot'];

// function newElement(array, removeLastEl){
//     return array;
// }

// array.shift();
// console.log(array);

// Додаткові роботи №1 та 4 були складними для мене, тому я не зміг виконати їх
// Написати цикл який замінює відємне значення в масиві на 0  let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36] 

// let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

// for(let i=0;i<checkArr.length;i++){
//     if(checkArr[i]<0){
//         checkArr[i] = 0;
//     }
// }
// console.log(checkArr);

// Створити цикл який виводить значення в консоль в такому форматі "Сьогодні ....  у вас такі плани .." для данних використовує два массива let days = ["Понеділок", "Середа", "Неділя"] let plans = ["Урок 03", "Урок 04", "Вихідни"]

let days = ['Понеділок', 'Середа', 'Неділя'];
let plans = ['Урок03', 'Урок04', 'Вихідний'];

function toDoList (daysArr, plansArr){
    if(daysArr.length === plansArr.length){
        for(let i=0;i<daysArr.length;i++){
            console.log(`Сьогодні ${days[i]} у вас такі плани ${plans[i]}`);
        }
    }
    else{
       console.log('Надайте більше інормації');
    }
}

toDoList(days, plans);