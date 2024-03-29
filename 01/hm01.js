let userNickname = "Bob";
let userScore = '10';

let products = Number(prompt('Кількість товарів'));
let price = Number(prompt('Ціна товару'));

let totalPrice = products*price;
let percentValue = totalPrice/100;
let discount = percentValue*5;
console.log('Discount', discount);
let newTotalPrice = totalPrice-discount;
console.log('New price', newTotalPrice);