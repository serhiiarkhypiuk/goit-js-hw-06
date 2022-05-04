const input = document.querySelector("input#validation-input")

const inputValidation = (event) => {
    if (event.currentTarget.value.length == input.dataset.length) {
        input.classList.remove("invalid")
        input.classList.add("valid")
    }
    else {
        input.classList.remove("valid")
        input.classList.add("invalid")
    }
}

input.addEventListener("blur", inputValidation)
