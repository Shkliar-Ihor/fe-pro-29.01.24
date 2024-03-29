let firstValue = 1;
// let buferValue = firstValue;
// firstValue = buferValue +3; Довгий запис
// firstValue = firstValue +3; // 1+3
firstValue +=3;
firstValue -=4;
firstValue *=5;
firstValue %=2;
console.log(firstValue);

let prefixIncrement = 0;
console.log('PrefixIncrement 0', prefixIncrement);
console.log('PrefixIncrement 1', ++prefixIncrement);//1
console.log('PrefixIncrement test', prefixIncrement);

console.log('PrefixIncrement 2', ++prefixIncrement);
console.log('PrefixIncrement test', prefixIncrement);

console.log('PrefixIncrement 3', ++prefixIncrement);
console.log('PrefixIncrement test', prefixIncrement);

console.log('PrefixIncrement 4', ++prefixIncrement);
console.log('PrefixIncrement test', prefixIncrement);

let postfixIncrement = 0;
console.log('-------------');

console.log('postfixIncrement 0', postfixIncrement);
console.log('postfixIncrement 1', postfixIncrement++);//0
console.log('postfixIncrement test', postfixIncrement);

console.log('postfixIncrement 2', postfixIncrement++);
console.log('postfixIncrement test', postfixIncrement);

console.log('postfixIncrement 3', postfixIncrement++);
console.log('postfixIncrement test', postfixIncrement);

console.log('postfixIncrement 4', postfixIncrement++);
console.log('postfixIncrement test', postfixIncrement);




