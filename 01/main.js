// alert('Hello from js file!');

// var - створення змінної старий варіант
// var salt = 'salt';
// var Salt = "salt";

// let - створ. змінної більше розшир. функціонал
let userName = 'Tom';
let UserName = 'Tom';
let user_name = 'Tom';
let username = 'Tom';
let USERNAME = 'Tom';

// const - для значеннь які не повинні перезаписуватися
const USERKEY = '12345';

//https://www.w3schools.com/js/js_reserved.asp

userName = 'Bob';
// userName = 23;

//Number

let numberValue = 100;
let numberFloat = 0.33;
//Nan - not a number
let numberNan = NaN;
let numberInfinity = Infinity;

// console.log('object') - для виводу даних
console.log('Hello console!');
console.log(numberInfinity);
console.log(numberValue);
console.log(numberNan);
//console.log('object', object); - для виводу тексту + значення в консоль
console.log('NumberFloat', numberFloat);
console.log('Max value', Number.MAX_VALUE);
console.log('Min value', Number.MIN_VALUE);
console.log('Max value', Number.POSITIVE_INFINITY);
console.log('Min value', Number.NEGATIVE_INFINITY);


let newValue = userName + numberValue;
console.log('newValue', newValue);

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
console.log(emptyValue);

// alert(trueValue);
//prompt - виводить діалогове вікно з інпутом та батном
// prompt('Як ваш день?');
let dayInfo = prompt('Як ваш день?', 'Пусте значення');


console.log('DayInfo from prompt', dayInfo);
