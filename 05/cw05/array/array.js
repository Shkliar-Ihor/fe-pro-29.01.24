//forEach - це метод у JavaScript, який дозволяє виконати певну дію для кожного елемента масиву.
let products = ['tv', 'phone', 'laptop'];
products.forEach((value, index, array)=>{
    console.log(`Array value ${value}, index ${index}, array ${array}`);
});

products.forEach(productItem=>{
    console.log(`Products ${productItem}`);
});

//map - дозволяє легко трансформувати один масив у інший, використовуючи задану логіку обробки для кожного елемента.
let afterMap = products.map((value, index, array)=>`Map: Array value ${value}, index ${index}, array ${array}`);
console.log(afterMap);

let doubleValue = (a)=>a*2;
// function modifyArray(arrayValue, callback){
//     let newArray = [];
//     for(let i=0; i<arrayValue.length; i++){
//         newArray.push(callback(arrayValue[i]));
//     }
//     return newArray;
// }

let newArray = [1, 2, 4].map(doubleValue);
console.log(newArray);

let userInfo = ['Tom', ['html', 'css', 'js', 'java'], ['link1', 'link2']];
// userInfo[1]
// userInfo[2]
