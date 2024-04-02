let a = 1;
let b = 2;
let result = 0;

if(a>b){
    result = a+b;
}
else{
    result = a-b;
}
if(b>a){
    result = a+b;
}
else{
    result = a-b;
}
//На момент створення функції, занчення в(параметри) 
function summ(firstNumber, secondNumber){
    console.log(`Summ ${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);
}
//На момент виклику функції, занчення в(аргументи)
summ(a, b);
summ(10, 20);
summ(true, '20');
summ(true, false);

// let userFirstNumber = Number(prompt('Type number'));
// let userSecondNumber = Number(prompt('Type number'));

function minus(firstNumberMinus, secondNumberMinus){
    console.log(`Minus ${firstNumberMinus} - ${secondNumberMinus} = ${firstNumberMinus-secondNumberMinus}`);
}

function divide(firstNumberDivide, secondNumberDivide){
    console.log(`Divide ${firstNumberDivide} / ${secondNumberDivide} = ${firstNumberDivide/secondNumberDivide}`);
}

function checkNumber(value){
    if(value>0){
        return true;
    }
    else{
        return false;
    }
}

let myValue = checkNumber(2);//'Value true'
console.log(myValue);
let myCheckValue = checkNumber(0);
console,log(`MyCheckValue ${myCheckValue}`);
console.log(`Check value ${checkNumber(2)} and check number 3 = ${checkNumber(3)} `);

// let userOperation = prompt('User chose oparation +-/*%');
// switch (userOperation) {
//     case '+':
//         summ(userFirstNumber, userSecondNumber);
//         break;
//     case '-':
//         minus(userFirstNumber, userSecondNumber);   
//     default:
//         console.log('No information');
//         break;
// }

if(checkNumber(-1)){
    alert('Hello if');
}
else{
    alert('Hello else');
}