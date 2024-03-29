window.onload = function(){
    let isTunel = true;
    let firstEl = document.querySelector('.first');
    let secondEl = document.querySelector('.second');
    let thirdEl = document.querySelector('.third');

    firstEl.addEventListener('click', function(e){

        this.style.backgroundColor = 'green';
    }, isTunel);
    secondEl.addEventListener('click', function(e){

        this.style.backgroundColor = 'orange';
    }, isTunel);
    firstEl.addEventListener('click', function(e){

        this.style.backgroundColor = 'green';
    }, isTunel);
}