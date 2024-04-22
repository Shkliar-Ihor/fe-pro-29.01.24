// Домашня робота:
// 1)пройдіть по масиву і зробіть заповнення таблиці даними з масива
window.onload = function(){

// const booksArray = [
//     {
//         title: 'Пригоди Аліси в Країні Див',
//         year: 1865,
//         rating: 4.5
//     },
//     {
//         title: '1984',
//         year: 1949,
//         rating: 4.8
//     },
//     {
//         title: 'Гаррі Поттер і філософський камінь',
//         year: 1997,
//         rating: 4.7
//     }
// ];

// let table = document.getElementById(`table`);

//     for (let books of booksArray) {
//         let tr = document.createElement(`tr`);
        
//         let td1 = document.createElement(`td`);
//         td1.textContent = books.title;
//         tr.appendChild(td1);
        
//         let td2 = document.createElement(`td`);
//         td2.textContent = books.year;
//         tr.appendChild(td2);
        
//         let td3 = document.createElement(`td`);
//         td3.textContent = books.rating;
//         tr.appendChild(td3);
        
//         table.appendChild(tr);
//     }
        
//         table.setAttribute(`style`, `background-color:green`);
//         let tableEl = document.querySelector(`table`);
//         tableEl.style.padding = `50px`;
//         tableEl.style.color = `black`;


// 2)За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

//  const menuData = [
//     { name: 'Головна', url: '/' },
//     { name: 'Про нас', url: '/about' },
//     { name: 'Послуги', url: '/services' },
//     // Додайте ще пункти меню за потреби
// ];

// let bodyEl = document.querySelector('body');

// let headerTitle = document.createElement('header');
// headerTitle.innerHTML = 'Hello JS'; 

// bodyEl.appendChild(headerTitle);

// headerTitle.style.padding = '50px';                                         
// headerTitle.style.backgroundColor='yellow';
// headerTitle.style.textAlign = 'center';


// 3)Створіть в хедері з попереднього завдання А теги з значенням з обєкта name  встановленим значенням в href з url.

let menuData = { name: 'https://example.com' };
let parent = document.getElementById('menu');

let NewLink = document.createElement('a');
NewLink.setAttribute('href', menuData.name);
NewLink.innerText = 'Link Text';
parent.appendChild(NewLink);

    let newLink = document.createElement('a');
    newLink.setAttribute('href', menuData.name);
    newLink.innerText = 'text';
    parent.after(newLink);
    console.log(menuData);
    

    // 4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

//     let divBlock = document.querySelector('.block');
//     console.log(divBlock);

//     divBlock.style.display = 'flex';
//     divBlock.style.flexWrap = 'wrap';

//     let fragment = document.createDocumentFragment();
//     let amount = 50;
    
//     for (let i = 1; i <= amount; i++){
//         let divEl = document.createElement('div');
//         divEl.innerHTML = '  name '+i  ;
//         divBlock.appendChild(divEl);
//         fragment.appendChild(divBlock);


//         divEl.style.backgroundColor = 'orange';
//         divEl.style.borderRadius = '15px';
//         divEl.style.width = '50px';
//         divEl.style.height = '50px';
//         divEl.style.display = 'flex';
//         divEl.style.textAlign = 'center';
//    }
//     document.body.appendChild(fragment);
//     console.log(fragment);

}
