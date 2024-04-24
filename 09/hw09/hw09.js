window.onload = function(){
    // Домашня робота:
// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір.
// Можете використати функцію яка генерує різний колір
    
    // function randomColor(){
    //     const r = Math.floor(Math.random()*256);
    //     const g = Math.floor(Math.random()*256);
    //     const b = Math.floor(Math.random()*256);
    //     return `rgb(${r}, ${g}, ${b})`;
    // }

    // let textEl = document.querySelector('.text');
    // let button = document.querySelector('.colorBtn');
    // button.onclick = function() {
    //     let color = randomColor();
    //     textEl.style.color = color;
    // }


// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

    // let newBtn = document.querySelector ('.twoTimesBigger');  
        
    // newBtn.ondblclick = function(){
    //     let width = newBtn.offsetWidth;
    //     let height = newBtn.offsetHeight;
    //     width*=2;
    //     height*=2;

    //     newBtn.style.width = `${width}px`;
    //     newBtn.style.height = `${height}px`;

    // }


// 3. addEventListener і removeEventListener
// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1.
// Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

let buttonEl = document.querySelector('.listener');
let text = document.querySelector('.text');
let count = 0;

function handleClick() {
    count += 1;
    if (count >= 10) {
        buttonEl.removeEventListener('click', handleClick);
    }
    text.innerHTML = `Counter <strong>${count}</strong>`;
}

buttonEl.addEventListener('click', handleClick);


// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу.
// Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

    // let delBtn = document.querySelector('.deleteBtn');
    // let divs = document.querySelector('.page div');
    // let elements = document.querySelector('.page');

    // delBtn.addEventListener('click', function(){
    //     elements.firstElementChild.remove();
    // });
}