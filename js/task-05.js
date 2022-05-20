const textInput = document.querySelector("input#name-input")
const output = document.querySelector("span#name-output")
const defaultName = output.textContent

const inputEvent = (event) => {
    if (event.currentTarget.value.length === 0) {
        output.textContent = defaultName
    }
    else {
        output.textContent = event.currentTarget.value
    }
}

textInput.addEventListener("input", inputEvent)
