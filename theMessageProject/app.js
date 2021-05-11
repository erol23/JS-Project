const msg = document.querySelector('#message');
const lastMessage = document.querySelector('#lastmessage');
const button = document.querySelector('button')


function messageStyle(){
    lastMessage.style.display = "block";
}   
function display(){
    lastMessage.style.display = 'none'
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    lastMessage.style = messageStyle();
    if(msg.value == ''){
        lastMessage.style.color = 'red'
        lastMessage.style.backgroundColor = 'rgb(173, 102, 102)'
        lastMessage.textContent = 'please enter a message!!'.toUpperCase();
        setTimeout(display, 2000);
    }else if (msg.value == ' '){
        lastMessage.style.color = 'red'
        lastMessage.style.backgroundColor = 'rgb(173, 102, 102)'
        lastMessage.textContent = 'please enter a message!!'.toUpperCase();
        setTimeout(display, 2000);
    }else{
        lastMessage.textContent = msg.value.toUpperCase();
    }
    msg.value = "";
})
