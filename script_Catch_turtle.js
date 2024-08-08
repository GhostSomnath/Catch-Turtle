

document.addEventListener('DOMContentLoaded', () => {
    const Turtle = document.getElementById('Turtle');
    const boxWidth = Turtle.offsetWidth;
    const boxHeight = Turtle.offsetHeight;
    const range = 20;

    let boxX = window.innerWidth/2 - boxWidth/2;
    let boxY = window.innerHeight/2 - boxHeight/2;

    Turtle.style.left = boxX + 'px';
    Turtle.style.top = boxY + 'px';

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key == 'ArrowUp' && boxY - range >= 0) {
            boxY = boxY - range;
        } 
        else if (key == 'ArrowDown' && boxY + boxHeight + range <= window.innerHeight) {
            boxY = boxY + range;
        } 
        else if (key == 'ArrowLeft' && boxX - range >= 0) {
            boxX = boxX - range;
        } 
        else if (key == 'ArrowRight' && boxX + boxWidth + range <= window.innerWidth) {
            boxX = boxX + range;
        }

        Turtle.style.left = boxX + 'px';
        
        Turtle.style.top = boxY + 'px';
    });
});


// --------------------------Rabbit--------------------------

document.addEventListener('DOMContentLoaded', () => {
    const rabbit = document.getElementById('rabbit');
    const boxWidth = rabbit.offsetWidth;
    const boxHeight = rabbit.offsetHeight;
    const range = 20;

    let boxX = window.innerWidth/2 - boxWidth/2+20;
    let boxY = window.innerHeight/2 - boxHeight/2;

    rabbit.style.left = boxX + 'px';
    rabbit.style.top = boxY + 'px';

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key == 'w' && boxY - range >= 0) {
            boxY = boxY - range;
        } 
        else if (key == 's' && boxY + boxHeight + range <= window.innerHeight) {
            boxY = boxY + range;
        } 
        else if (key == 'a' && boxX - range >= 0) {
            boxX = boxX - range;
        } 
        else if (key == 'd' && boxX + boxWidth + range <= window.innerWidth) {
            boxX = boxX + range;
        }

        rabbit.style.left = boxX + 'px';
        
        rabbit.style.top = boxY + 'px';
    });

    

});

