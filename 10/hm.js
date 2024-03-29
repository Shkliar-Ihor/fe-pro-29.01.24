window.onload = function(){
    const counterBtn = document.querySelector('.counter');
    const counterContainer = document.querySelector('.container');
    let count = 0;
    function increaseCount(){
        count++;
        counterContainer.textContent = count;
        if(count>=10){
            counterBtn.removeEventListener('click', increaseCount);
            counterBtn.setAttribute('disabled', 'disabled');
        }
    }

    counterBtn.addEventListener('click', increaseCount);
    
    let[...allitemsButtons] = document.querySelector('.div-item button');
    allitemsButtons.forEach(button=>{
        button.onclick = function(){
            button.parentElement.remove();
        }
    });

    let[...allDivs] = documents.querySelector('.div-item');

    allDivs.forEach(div=>{
        div.onclick = function(){
            this.remove();
        }
    });

    
}