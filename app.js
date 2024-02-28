document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let isGameOver = false;
    let doodlerLefttSpace = 50;
    let doodlerBottomSpace = 150;


    
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }

    createDoodler()
})