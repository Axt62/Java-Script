import {getWeatherByCity} from "../weather/weather_service.js";

const weatherDiv = document.getElementById('weather');

const inputSearch = document.getElementById('city');
const btnSearch = document.getElementById('btn_search')


getWeatherByCity("douai")
    .then(r => {
        weatherDiv.innerHTML = toHtml(r);
    });

function getTime(time) {
        const hour = ("0" + time.getHours()).slice(-2);
        const min = ("0" + time.getMinutes()).slice(-2);
        const sec = ("0" + time.getSeconds()).slice(-2);
        return `${hour}:${min}:${sec}`;
    }

function toHtml(w) {
    return `
    <h1 class="text-center fw-bolder text-white display-1">Weather APP<img class="mto" src="../weather/186fb3887b0993c0a96da0a68e65ffa2.jpeg" alt="" srcset=""></h1>
    <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://woody.cloudly.space/app/uploads/douai/2020/08/thumbs/panoramique-depuis-st-pierre-rrr-1920x1080.jpg" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title"><span>${w.city}</span> <img src="${w.weatherIcon}" alt=""></h5>
        <p class="card-text">${w.weatherDescription}</p>
    </div>
    </div>
    <hr style="height:10px; width:100%; border-width:0; color:white; ">
        <ul class="list-group p-2 bd-highlight text-decoration-underline">
            <li class="list-group-item">Min : <span>${w.temperatureMin} °C</span></li>
            <li class="list-group-item">Actuel : <span>${w.temperature} °C</span></li>
            <li class="list-group-item">Max : <span>${w.temperatureMax} °C</span></li>
        </ul>
            </div>
          </div>
          <div class="p-3 mb-2 bg-light text-dark">     
                <p>Ressenti : <span>${w.temperatureRessenti} °C</span></p>
                <p>Humidité : ${w.humidite} %</p>
            <div class="wind">
                <p>Nord</p>
            <div>
                <p>Ouest</p>
                <p class="weather_deg" color="#c3c3c3" style="--degre: ${w.ventDegre}deg">${w.ventVitesse} km/h</p>
                <p>Est</p>
            </div>
                <p>Sud</p>
            </div>
        <div class="soleil">
            <p>&#9788; ${getTime(w.soleilLeve)}</p>
            <p>${getTime(w.soleilCouche)} &#9790;</p>
        </div>
        </div>

    `;
}


