let counterValue = 0
let pageValue = document.querySelector("span#value")

const decreaseButton = document.querySelector("button[data-action='decrement']")
const increaseButton = document.querySelector("button[data-action='increment']")

const increaseCounterValue = () => {
    counterValue++
    pageValue.innerHTML = counterValue
}

const decreaseCounterValue = () => {
    counterValue--
    pageValue.innerHTML = counterValue
}

increaseButton.addEventListener("click", increaseCounterValue)
decreaseButton.addEventListener("click", decreaseCounterValue)