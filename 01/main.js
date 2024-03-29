// alert('Hello from js file')
// Старий спосіб створення змінних
// var salt = 'salt';
// var Salt = "salt";

let userName = 'Tom';
let UserName = 'Tom';
let user_name = 'Tom';
// let user-name = 'Tom' "-,*,) і т.д." не можна ставити!;
let USERNAME = 'Tom';

const USERKEY = '12345';

// https://www.w3schools.com/js/js_reserved.asp

userName = 'Bob';
// userName = 23;

//Number

let numberValue = 100;
let numberFloat = 0.33;
let numberNan = NaN;
let numberInfinity = Infinity;

console.log('Hello console');
console.log(numberInfinity);
console.log(numberValue);
console.log(numberNan);
console.log('NumberFloat', numberFloat);
console.log('Max value', Number.MAX_VALUE);
console.log('Max value', Number.MIN_VALUE);
console.log('Max value', Number.POSITIVE_INFINITY);
console.log('Max value', Number.NEGATIVE_INFINITY);


let newValue = userName + numberValue;
console.log('newValue =', newValue);

let firstValue = '10';
let secondValue = 10;
let summVariables = firstValue + secondValue;
console.log('Result', summVariables);
console.log(firstValue+secondValue);
console.log(firstValue-secondValue);
console.log(firstValue*secondValue);
console.log(firstValue/secondValue);
console.log(firstValue%secondValue);

//Bolean
let trueValue = true;
let falseValue = false;

//Null Undefined
let noValue = null;
let emptyValue;
// console.log(emptyValue);

// alert(trueValue);
// prompt('How was your day?');
// let dayInfo = prompt('How was your day?', 'Пусте значення' );

// console.log('DayInfo from prompt'. dayInfo);

let firstPrompt = prompt('Напишіть перше число');
let secondPrompt = Number(prompt('Напишіть друге число'));
let firstPromptNumber = parseFloat(firstPrompt);
let summOperaction = firstPromptNumber+secondPrompt;
console.log(summOperaction);
// console.log(+firstPrompt+secondPrompt+ +secondPrompt);
// console.log(parseFloat(firstPrompt));
// console.log(Number(firstPrompt));


