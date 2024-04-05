// let transport1 = 'car';
// let transport2 = 'bus';
// array - масив
// => - оператор, який використовується для визначення функцій-стрілок.

let firstArray = [];
let secondArray = new Array(10);

firstArray = ['String', 2,3, true, , , false, ['array Inside array', 2, 3, 4]];

console.log(firstArray);
console.log(secondArray);

console.log(firstArray.length);

console.log(firstArray[0]);
console.log(firstArray[2]);
console.log(firstArray[20]);

for(let i=0; i<firstArray.length; i++){
    console.log(`Array value ${secondArray[i]}`);
}

console.log(firstArray[firstArray.length-1][3]);

let multiArray = [
    ['User name', 'html, css'],
    ['User name2', 'html, css, js'],
    ['User name3', 'html']
]

for(let i=0; i<multiArray.length;i++){
    // console.log(multiArray[i]);
    for(let y=0; y<multiArray[i].length; y++){
        console.log(`User info ${multiArray[i][y]}`);
    }
}

let newNumbersArr = [];//2,4,6,8
let numbersArr = [1,2,3,4,5,6,7,8];

//push - використовується для додавання одного або більше елементів в кінець масиву
// і повертає нову довжину масиву після додавання.
for(let i=0;i<numbersArr.length;i++){
    newNumbersArr.push(numbersArr[i]*2);
}

//метод pop видаляє елемент
newNumbersArr.pop();

console.log(newNumbersArr);

let productList = [];
productList.unshift('milk');
productList.unshift('cookie');
productList.unshift('cola');
productList.unshift('tomato');

console.log(productList);

productList.shift();
productList.shift();
productList.shift();

console.log(productList);

console.log(Array.isArray(productList));

//fill - використовується для заповнення всіх або деяких елементів масиву сталим значенням.
let fillArr = [1,2,3,4,5,6];
let newFillArr = fillArr.fill('New value', 0, 4);
// console.log(fillArr);
console.log(newFillArr);

//sort - 
let sortArr = [8, 16, 3, 12, 1];
// sortArr.sort();
// sortArr.sort((a,b)=>a-b);
// sortArr.sort((a,b)=>a+b);
sortArr.sort((a,b)=>{return b-a});
console.log(sortArr);

//splice - дозволяє додати або видалити нові елементи
let spliceArr = [0,1,3,4,5,6];
// spliceArr = spliceArr.splice();[]
// spliceArr = spliceArr.splice(2); [3, 4, 5, 6]
spliceArr = spliceArr.splice(0,4);
console.log(spliceArr);


//reverse - розврото масиву
let startArr = ['First',2,3,4,5,'Last'];
startArr.reverse();
console.log(startArr);

//concat - використовується для об'єднання двох або більше масивів.
let firstArr = [1,2,3];
let secondArr = [4,5,6];
firstArr = firstArr.concat(secondArr, 7, 8, [9, 10]);

console.log(firstArr);

let users = ['Anna', 'Tom', 'Den', 'Dima', 'Alex'];
console.log(users.includes('Tom'));
console.log(users.includes('Tomas'));

//indexOf - використовується для пошуку першого входження елемента у масиві і повертає його індекс.
console.log(users.indexOf('Dima'));
console.log(users[3]);
console.log(users.indexOf('Tomas'));

let joinArr = ['Hello!', 'World'];
let afterJoin = joinArr.join('');
//split
let text = 'Future, array';
console.log(text.split(','));

console.log(afterJoin);


let sliceArr = [0,1,2,3,4,5,6];
// let newArr = sliceArr.slice(); full copy
// let newArr = sliceArr.slice(3);
// let newArr = sliceArr.slice(-3);
let newArr = sliceArr.slice(2,4);

console.log(newArr); 

let price = [100,150,120,180,200,135,125];
function sortPrice(price){
    return price>120;
}
let sortedPrice = price.filter(sortPrice);
console.log(sortedPrice);
