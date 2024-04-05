
let functionExpression = function(){
        // alert('Hello!');
        return 'Hello!';
    }
functionExpression();
// function sayHi(){
//     alert('Hello!');
// }

function welcomeUser(){
    document.write(`<h1>Welcome!</h1>`);
}
function goodbye(){
    document.write(`<h1>Goodbye!</h1>`);  
}

function checkAge(age, showOk, showCancel){
    if(age>18){
        // alert('Welcome!');
        showOk();
    }
    else{
        // alert('Goodbye!');
        showCancel();
    }
}

checkAge(18, welcomeUser, goodbye);


function summFn(a,b){
    return a+b;
}
let summ = (firstValue, secondValue)=>firstValue+secondValue;
console.log(summ(2,3));

let userName = 'user';
let welcomeFn = (userName == 'admin')?
    ()=>`Hello! ${userName}`:
    ()=>`Simple user ${userName}`;

console.log(welcomeFn());

let divide =(a,b)=>{
    if(b==0){
        alert('0 is impossible');
    }
    else{
        return a/b;
    }
}

let defaultFnValue = function(userName='No information about user'){
    console.log(userName);
}

defaultFnValue();

let i = 2;

function callI(){
    let i = 3;
    console.log(i);
    function inside(){
        console.log(`Inside callI ${i}`)
    } 
    inside();
}

// console.log(i);
callI();