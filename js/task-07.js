const slider = document.querySelector("input#font-size-control")
const text = document.querySelector("span#text")

const setFontSize = () => {
    text.style.fontSize = slider.value +'px'
}

slider.addEventListener("input", setFontSize)
slider.dispatchEvent(new Event('input'))