const minute = document.querySelector('#chrono span:nth-child(1)');
const second = document.querySelector('#chrono span:nth-child(2)');
const milli = document.querySelector('#chrono span:nth-child(3)');

const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');

const liste = document.querySelector('.liste');

let countMilli = 0;
let countSecond = 0;
let countMinute = 0;

let interval = 0;


function oneToTwo(num){
    return num < 10 ? `0${num}`: num.toString();
}
function oneToTwoMilli(num){
    if (num < 10) {
        return `00${num}`;
         }else if (num < 100){
             return `0${num}`;
         }else{
             return num.toString();
         }
}

function remplissageHtml() {
    milli.innerHTML = oneToTwoMilli(countMilli);
    second.innerHTML = oneToTwo(countSecond);
    minute.innerHTML = oneToTwo(countMinute);
}

remplissageHtml();

btnStart.addEventListener('click', () => {
    interval = setInterval(() => {
        countMilli += 60;
        logiqueCompteur();
       // console.log(countMilli, countSecond, countMinute);
       remplissageHtml();
    }, 60);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    remplissageHtml();
});

function logiqueCompteur() {
    if (countMilli >= 1000){
        countMilli = 0;
        countSecond++;
        
    }
    if (countSecond >= 60){
        countSecond  = 0;
        countMinute++;

    }
    if (countMinute >= 60) {
        countMilli = 0;
        countSecond = 0;
        countMinute = 0;
    }



}