
// --------------------------Rabbit--------------------------

document.addEventListener('DOMContentLoaded', () => {
    const rabbit = document.getElementById('rabbit');
    const RboxWidth = rabbit.offsetWidth;
    const RboxHeight = rabbit.offsetHeight;
    const Rrange = 20;

    let RboxX = window.innerWidth/2 - RboxWidth/2+20;
    let RboxY = window.innerHeight/2 - RboxHeight/2;

    rabbit.style.left = RboxX + 'px';
    rabbit.style.top = RboxY + 'px';

    document.addEventListener('Rkeydown', (event) => {
        const Rkey = event.Rkey;

        if (Rkey == 'w' && RboxY - Rrange >= 0) {
            RboxY = RboxY - Rrange;
        } 
        else if (Rkey == 's' && RboxY + RboxHeight + Rrange <= window.innerHeight) {
            RboxY = RboxY + Rrange;
        } 
        else if (Rkey == 'a' && RboxX - Rrange >= 0) {
            RboxX = RboxX - Rrange;
        } 
        else if (Rkey == 'd' && RboxX + RboxWidth + Rrange <= window.innerWidth) {
            RboxX = RboxX + Rrange;
        }

        rabbit.style.left = RboxX + 'px';
        
        rabbit.style.top = RboxY + 'px';
    });
})