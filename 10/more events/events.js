window.onload = function(){
    let divMouse = document.querySelector('.mouse');
    let infoSpan = document.querySelector('.mouse');
    divMouse.addEventListener('mousedown', function(){
        infoSpan.innerHTML = 'Mousedown'
    });
    divMouse.addEventListener('mouseup', function(){
        infoSpan.innerHTML = 'Mouseup'
    });

    let hoverjsEl = document.querySelector('.hoverjs');
    let hoverjsSpan = document.querySelector('.hoverjs span');
    hoverjsEl.addEventListener('mouseover', function(){
        hoverjsElSpan.innerHTML = 'Курсор над елементом';
        this.style.background = 'green';
        divMouse.style.background = 'orange';
    });
    hoverjsEl.addEventListener('mouseout', function(){
        hoverjsSpan.innerHTML = 'Курсор покинув елемент';
        this.style.background = 'lawngreen';
        divMouse.style.background = 'lawngreen';

    });
    let phoverEl = document.querySelector('.hoverjs p');
    hoverjsEl.addEventListener('mousemove', function(e){
        phoverEl.innerHTML = `${e.type} <br> cordinate<br>
        ${e.clientX} and ${e.clientY}<br>
        ${e.pageX} and ${e.pageY}<br>
        ${e.offsetX} and ${e.offsetY}`
    });
    let textAreaEl = document.querySelector('texarea');
    textAreaEl.addEventListener('contextmenu', function(e){
        e.preventDefault();
        // alert('click');
    });
    //keydown
    //keyUp
    //keypress
    let textInfoEl = document.querySelector('.textinfo');
    textAreaEl.addEventListener('keypress', function(event){
        textInfoEl.innerHTML=`
        ${event.key} code ${event.code}
        ${event.shiftKey} shift info <br>
        ${event.altKey} alt info <br>  
        ${event.ctrlKey} ctrl info
        `;
    });
//     document.addEventListener('keydown', function(e){
//         console.log(e);;
//     });
window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(scrollPosition>500){
        this.document.querySelector('body').style.background = 'blue';
    }
    if(scrollPosition>800){
        this.document.querySelector('body').style.background = ''
    }
});

}
