window.onload = function(){
    let posX = 0;
    let posY = 0;
    
    document.addEventListener('keydown', function(event)){
        console.log(event.key);
        switch(event.key){
            case 'ArrowUp':
                posY-=moveStep;
                break;
            case 'ArrowDown':
                posY-=moveStep;
                break;
            case 'ArrowLeft':
                posX-=moveStep;
                break;
            case 'ArrowRight':
                posX-=moveStep;
                break;
        }
    }
}