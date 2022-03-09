const hourSpan = document.getElementById('hour');
const minuteSpan = document.getElementById('minute');
const secondSpan = document.getElementById('second');

function getTime(){
    const date = new Date();
    hourSpan.innerText = inf10TwoChar(date.getHours().toString());
    minuteSpan.innerText = inf10TwoChar(date.getMinutes().toString());
    secondSpan.innerText = inf10TwoChar(date.getSeconds().toString());
}

function inf10TwoChar(date){
    return date < 10 ? `0${date}` : date.toString();
}

getTime();

setInterval(getTime, 1000);

