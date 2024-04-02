let firstValue = 1;
// let bufferValue = firstValue;
// firstValue = bufferValue +3; - довгий запис
// firstValue = firstValue +3;// 1+3 - короткий запис
firstValue +=3;//ще коротше
firstValue -=4;
firstValue *5;
firstValue %=2;
console.log(firstValue);

// ++(на початку) - дозволяє збільшити значення перед викликом 
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
console.log('-----------------------');

console.log('postfixIncrement 0', postfixIncrement);
console.log('postfixIncrement 1', postfixIncrement++);//0
console.log('postfixIncrement test', postfixIncrement);

console.log('postfixIncrement 2', postfixIncrement++);
console.log('postfixIncrement test', postfixIncrement);

console.log('postfixIncrement 3', postfixIncrement++);
console.log('postfixIncrement test', postfixIncrement);

console.log('postfixIncrement 4', postfixIncrement++);
console.log('postfixIncrement test', postfixIncrement);

console.log('-----------------');


let postfixDecrement = 0;
console.log('postfixDecrement 0', postfixDecrement);
console.log('postfixDecrement 1', postfixDecrement--);//1
console.log('postfixDecrement test', postfixDecrement);

console.log('-----------------');


let prefixDecrement = 0;
console.log('prefixDecrement 0', prefixDecrement);
console.log('prefixDecrement 1', --prefixDecrement);//1
console.log('prefixDecrement test', prefixDecrement);



