// @ts-ignore
import { BeerModel } from "./beer_model.js";

async function getBeers(numberBeers = 10) {
const response = await fetch ("https://api.punkapi.com/v2/beers?page=1&per_page=10" + numberBeers)
const result = await response.json();
console.log(result);

}
/*function getBeers(numberBeers = 10) {
    fetch ("https://api.punkapi.com/v2/beers?page=1&per_page=10")
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
}*/




export {getBeers};