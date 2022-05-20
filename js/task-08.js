const form = document.querySelector(".login-form")

const handleSubmit = (event) => {
    event.preventDefault()
    const {
        elements: { email, password }
    } = event.currentTarget

    if (email.value === "" || password.value === "") {
        return alert("Any input field can't be empty!")
    }

    console.log({ [email.name]: email.value, [password.name]: password.value })
    event.currentTarget.reset()
}

form.addEventListener("submit", handleSubmit)
