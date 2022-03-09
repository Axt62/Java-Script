const hourSpan = document.getElementById('hour');
const minuteSpan = document.getElementById('minute');
const secondSpan = document.getElementById('seond');

function getTime(){
    const date = new Date();
    hourSpan.innerText = date.getHours().toString();
    minuteSpan.innerText = date.getMinutes().toString();
    secondSpan.innerText = date.getSeconds().toString();
}