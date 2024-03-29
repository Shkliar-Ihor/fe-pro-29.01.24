window.onload = function(){
    let blockEl = document.querySelector('.block');
    let width = blockEl.offsetWidth;
    let height = blockEl.offsetHeight;
    console.log(`Block info ${width} and ${height}`);

    let widthC = blockEl.clientWidth;
    let heightC = blockEl.clientHeight;

    console.log(`Block info ${widthC} and ${heightC}`);

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
}
