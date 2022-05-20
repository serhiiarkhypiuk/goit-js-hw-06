let counterValue = 0
let pageValue = document.querySelector("span#value")

const decreaseButton = document.querySelector("button[data-action='decrement']")
const increaseButton = document.querySelector("button[data-action='increment']")

const increaseCounterValue = () => {
    counterValue++
    pageValue.innerHTML = counterValue
    console.log('click!')
}

const decreaseCounterValue = () => {
    counterValue--
    pageValue.innerHTML = counterValue
    console.log('click!')
}

increaseButton.addEventListener("click", increaseCounterValue)
decreaseButton.addEventListener("click", decreaseCounterValue)