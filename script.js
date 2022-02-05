const button = document.getElementById("button-converter")
const selectBot = document.getElementById("select-bot")

const dolar = 5.3
const euro = 6
const biticoin = 230000

const convertValues = () => {
    const inputReal = document.getElementById("input-real").value
    const realValue = document.getElementById("currency-value-top")
    const currencyValuebot = document.getElementById("currency-value-bot")

    realValue.innerHTML = inputReal

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReal)

    if (selectBot.value === "US$ Dólar americano") {
        currencyValuebot.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputReal / dolar)
    }

    if (selectBot.value === "€ Euro") {
        currencyValuebot.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputReal / euro)
    }

    if (selectBot.value === "Bitcoin") {
        currencyValuebot.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputReal / biticoin)
    }
}

button.addEventListener("click", convertValues)

const imageSwap = () => {
    const imageBot = document.getElementById("img-bot")
    const currencyName = document.getElementById("currency-name")

    if (selectBot.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar Americano"
        imageBot.src = ("./assets/eua.svg")
    }

    if (selectBot.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        imageBot.src = ("./assets/euro.svg")
    }

    if (selectBot.value === "Bitcoin") {
        currencyName.innerHTML = "BTC"
        imageBot.src = ("./assets/bitcoin.svg")
    }

    convertValues()

}

selectBot.addEventListener("change", imageSwap)