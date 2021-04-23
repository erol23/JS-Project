const button = document.querySelector('.btn');
const hex = document.getElementById('hex');
const container = document.getElementById('container');

button.addEventListener('click', callColor);


function callColor() {
    var result = '#';
    var leters = 'ABCDEF0123456789';
    var letersLength = leters.length;
    for ( var i = 0; i < 6; i++ ) {
       result += leters.charAt(Math.floor(Math.random() * letersLength));
    }
    hex.textContent = (`HEX COLOR :${result}`);
    container.style.backgroundColor = (`${result}`);
 }