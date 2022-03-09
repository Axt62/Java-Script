const hourSpan = document.getElementById('hour');
const minuteSpan = document.getElementById('minute');
const secondSpan = document.getElementById('second');

function getTime(){
    const date = new Date();

   if (hourSpan.innerText !== inf10TwoChar(date.getHours().toString())){
       hourSpan.innerText = inf10TwoChar(date.getHours());
   }
   if (minuteSpan.innerText !== inf10TwoChar(date.getMinutes().toString())){
        hourSpan.innerText = inf10TwoChar(date.getHours());
   }
    secondSpan.innerText = inf10TwoChar(date.getSeconds().toString());
}

function inf10TwoChar(date){
    return date < 10 ? `0${date}` : date.toString();
}

getTime();

setInterval(getTime, 1000);


anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

