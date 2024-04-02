// loop - цикл
console.log('Product 1');
console.log('Product 2');
console.log('Product 3');
console.log('......');
console.log('Product 50');
console.log('Product 1');
console.log('Product 2');
console.log('Product 3');
console.log('......');
console.log('Product 50');
// DRY - don't repeat yourself
// Умова do...while у JavaScript використовується для створення циклу,
// який виконується принаймні один раз, навіть якщо умова не виконується.

// window.onload в JavaScript використовується для встановлення функції, яка буде виконана після того,
// як весь документ та всі зображення на сторінці завантажаться повністю.


// window.onload = function(){
//     let count =1;
// do{
//     console.log(`Do while counter ${count}`);
//     let div = document.createElement('div');
// div.innerHTML = `<h3>Product</h3><p>Description</p><button>Buy</button>`;
// document.body.appendChild(div);
//     count++;
// }while(count<=150);
// }

// let whileCount = 0;
// while(whileCount<=10){
//     console.log(whileCount);
//     whileCount++;
// }

//for(counter, limit of counter and increasing(збільшеня кількості або ж зменшення на якусь к-сть одиниць)){} - те саме що і "do while"
//i - змінна в "for"
//break - зупинка(переривання) коду на зазначеному місці
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(`Loop value ${i}`);
}

for(let i=0;i<4;i++){
    if(i==2){
        continue;
    }
    console.log(`Continue loop value ${i}`);
}


