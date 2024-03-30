// -Створіть змінну  userNickname  і розмість там значення типу стрінг
// - Створіть змінну типу userScore  і розмістіть там числове значення
let userNickname = 'Ihor';
let userScore = 123;

// - Отримайте через prompt 2 значення Ціна покупки  і кількість продуктів та порахуйте  загальну сумму до сплати
// let firstValue = prompt('Ціна покупки');
// let secondValue = prompt('Кількість продуктів');
// let summOperation = firstValue*secondValue;

// console.log('Вартість до сплати', summOperation);

// Додаткова робота:
// - вирахуйте скільки буде знижка 5% від загальної суми  розразованох в попередньому завданні
let firstValue = prompt('Ціна покупки');
let secondValue = prompt('Кількість продуктів');
let summOperation = firstValue*secondValue;
let discount = summOperation*0.05;

console.log('Вартість до сплати', summOperation);
console.log('Знижка 5%', discount);