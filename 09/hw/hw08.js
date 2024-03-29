window.onload = function(){
    function randomColor(){
        //rgb(231, 226, 226)
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*226);
        const b = Math.floor(Math.random()*226);
        return `rgb(${r}, ${g}, ${b})`;
    }
    let tableTbody = document.querySelector('/myTable tbody');
    console.log(tableTbody);
    function tEl(content){
        let td = document.createElement('td');
        td.innerText = content;
        return td;
    }
    booksArray

    let table = document.querySelector('.myTable');
    console.log(table);
    booksArray.forEach(book=>{
        let trEl = document.createElement('tr');
        // trEl.innerHTML = `
        // // <td>${book.title}</td>
        // // <td>${book.year}</td>
        // // <td>${book.rating}</td>`

        // trEl.appendChild(tdEl(book.title));
        // trEl.appendChild(tdEl(book.year));
        // trEl.appendChild(tdEl(book.rating));
        tableTbody.appendChild(trEl);
    });
    let now = new Date();
    console.log(now);
    console.log(now. getTime());
    console.log(`${new Date(1708968432869)}`);
    function addDay(date, days){
        const miliseconds = 24*60*60*1000;
        const nextDay = date.getTime() +days*miliseconds;
    }

    // // function addDay(date, days){

    // }
}