const button = document.querySelector('.btn');
const container = document.getElementById('container');
button.addEventListener('click', changeColor);

function changeColor(){
    let r = Math.floor(Math.random()*255 + 1);
    let g = Math.floor(Math.random()*255 + 1);
    let b = Math.floor(Math.random()*255 + 1);

    container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
