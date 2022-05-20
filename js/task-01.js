let categories = document.querySelectorAll('li.item')
console.log('Number of categories: ' + categories.length)
console.log('')

categories.forEach((categorie, index) => {
    console.log('Category: ' + categorie.querySelector('h2').textContent)
    console.log('Elements: ' + categorie.querySelectorAll('li').length)
    if (index !== (categories.length - 1)) {
        console.log('')
    }
})