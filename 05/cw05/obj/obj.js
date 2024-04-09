let myObj = new Object();//пустий об'єкт
let simple = {};//пустий об'єкт
console.log(myObj);
console.log(simple);

let workLaptop = {
    model: 'apple',
    ram: '16gb',
    memory: 512,
    accessories: ['mouse', 'keyboard'],
    isWork:true,
    // info:function(){
    //     console.log(`${workLaptop.model} ram:${workLaptop.ram}`);
    // }
    info:function(){
        console.log(`${this.model} ram:${this.ram}`);
    }
}

console.log(workLaptop);
console.log(`Console.log call info ${workLaptop.model} ram:${workLaptop.ram}`);
workLaptop.info();

workLaptop.processor = 'm2';
workLaptop.color = 'silver';

console.log(workLaptop);

data = ['01.01.2024', '01.02.2024', '01.03.2024']
let articles = [
    {
        title:'News about Ukraine',
        text:'Lorem ipsum',
        publicData:'01.01.2024'
    },
    {
        title:'News 2 about Ukraine',
        text:'Lorem ipsum'
    },
    {
        title:'News 2 about Ukraine',
        text:'Lorem ipsum'
    }
];
let objKeys  = ['color', 'ram'];
console.log(`Dynamic key ${workLaptop['color']}`);

objKeys.forEach((item)=>{
    console.log(`Dynamic ${workLaptop[item]}`);
});

delete workLaptop.model;
delete workLaptop.memory;

console.log(workLaptop);