// - дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням.
// Повині бути команди (додавання, множення, ділення, віднімання)

// let firstNumber = Number(prompt('Введіть число'));
// let userOperation = prompt('Виберіть дію: +, -, /, *.');
// let secondNumber = Number(prompt('Введіть число'));

// function summ(firstNumber, secondNumber){
//     console.log(`Summ ${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);
// }
// function minus(firstNumber, secondNumber){
//     console.log(`Minus ${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}`);
// }
// function divide(firstNumber, secondNumber){
//     if(firstNumber>0){
//         console.log(`${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`);
//     }
//     else{
//         alert('Ділити на нуль не можна!');
//     }
// }
// function multiply(firstNumber, secondNumber){
//     console.log(`Multiply ${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber}`);
// }

// switch (userOperation) {
//     case '+':
//         summ(firstNumber, secondNumber);
//         break;
//         case '-':
//         minus(firstNumber, secondNumber);  
//         break;
//         case '/':
//         divide(firstNumber, secondNumber);
//         break;
//         case '*':
//         multiply(firstNumber, secondNumber); 
//         break;
//     default:
//         alert('No information');
//          break;
// }


// - за допомогою циклу вивести в консоль всі парні значення числа 20
//у цій задачі я скористався chatgpt бо не знав, як записати третю зміну бо постійно рахувало тільки непарні числа

// for(let i=2;i<=20;i+=2){  
//     console.log(`Парні до 20: ${i}`);
// }


// - зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

// for(let i=10;i>=0;i--){
//     console.log(`Зворотній відлік від 10: ${i}`);
// }


// - реалізуйте таблицю множення за допомогою циклу
//  для конкретного числа (наприклад, для числа 5) за допомогою циклу for:

// let firstNumber = 5;
// for(let i=0;i<=10;i++){
//     console.log(`${firstNumber}*${i} = ${firstNumber*i}`);
// }


// - реалізуйте функцію яка отримує число і виводить в консоль лог таблицю множення цього чила
// перевірте роботу функцію викликавши функцію з різними значеннями.

// let firstNumber = Number(prompt('Введіть число'));

// for(let i=0;i<=10;i++){
//     console.log(`${firstNumber}*${i} = ${firstNumber*i}`);
// }


// - створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі.
// Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planet = prompt('Введіть назву планети');

switch (planet) {
    case 'Меркурій':
    case 'Mercury':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    case 'Венера':
    case 'Venus':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    case 'Земля':
    case 'Earth':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    case 'Марс':
    case 'Mars':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    case 'Юпітер':
    case 'Jupiter':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    case 'Сатурн':
    case 'Saturn':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    case 'Уран':
    case 'Uranus':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    case 'Нептун':
    case 'Neptun':
        console.log(`${planet} - ця планета знаходиться в Сонячній системі`);
        break;
    default:
        alert(`${planet} - не знаходиться в Сонячній системі`);
        break;
}