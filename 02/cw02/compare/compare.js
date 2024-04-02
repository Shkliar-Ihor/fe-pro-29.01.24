//== Дорівнює

//Boolean: true і false
console.log(`Compare 5 and 5, ${5==5}`);
console.log(`Compare 6 and 5, ${6==5}`);
console.log(`Compare '5' and 5, ${'5'==5}`);
console.log(`Compare null and undefined, ${null==undefined}`);
console.log(`Compare 0 and false, ${0==false}`);

//=== Суворе дорівнює
console.log('===');
console.log(`Compare 5 and 5, ${5===5}`);
console.log(`Compare 6 and 5, ${6===5}`);
console.log(`Compare '5' and 5, ${'5'===5}`);
console.log(`Compare null and undefined, ${null===undefined}`);
console.log(`Compare 0 and false, ${0===false}`);

//!= не дорівнює
console.log('!=');
console.log(`Compare 5 and 5, ${5!=5}`);
console.log(`Compare 6 and 5, ${6!=5}`);
console.log(`Compare '5' and 5, ${'5'!=5}`);

//> Більше

console.log('>');
console.log(`6>5 ${6>5}`);
console.log(`5>5 ${5>5}`);

//< Менше
console.log('<');
console.log(`6<5 ${6<5}`);
console.log(`5<5 ${5<5}`);

//<= Менше дорівнює
console.log(`5<=5 ${5<=5}`);

//>= Більше дорівнює
console.log(`5>=5 ${5>=5}`);

//&& Логічне і
//true && true = true
//false && true = false
//true && false = false
//false && false = false

console.log(`Compare result with && ${50>40 && 40>30 && 20>3}`);

// || чи або или або or
//true || false = true
//false || true = true
//true || true = true
//false || false = false

console.log(`Compare results with || ${5>40 || 40>30 || 2>3}`);


