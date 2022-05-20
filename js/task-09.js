const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector("button.change-color")
const body = document.querySelector("body")
const colorDeclaration = document.querySelector("span.color")

const changeColor = () => {
  const color = getRandomHexColor()
  body.style.backgroundColor = color
  colorDeclaration.textContent = color
}

changeColorButton.addEventListener("click", changeColor)
