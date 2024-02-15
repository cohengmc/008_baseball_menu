let hotDogs = 0
let beers = 0
let beerCountEl = document.getElementById("beer-count")
let hotdogCountEl = document.getElementById("hotdog-count")
let beerSubtotalEl = document.getElementById("beer-subtotal")
let hotdogSubtotalEl = document.getElementById("hotdog-subtotal")
let totalEl = document.getElementById("total")


function addHotDog() {
    hotDogs++
    updatePrices()
}

function addBeer() {
    beers++
    updatePrices()
}

function removeHotDog() {
    if (hotDogs > 0) {
        hotDogs--
        updatePrices()
    }
}

function removeBeer() {
    if (beers > 0) {
        beers--
        updatePrices()
    }
}

function updatePrices() {
    hotdogCountEl.innerHTML = hotDogs
    beerCountEl.innerHTML = beers
    beerSubtotalEl.innerHTML = beers * 3
    hotdogSubtotalEl.innerHTML = hotDogs * 4
    totalEl.innerHTML = beers * 3 + hotDogs * 4

}