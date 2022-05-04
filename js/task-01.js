let categories = document.querySelectorAll('li.item')
console.log('Number of categories: ' + categories.length)

categories.forEach((categorie) => {
    console.log('Category: ' + categorie.querySelector('h2').textContent)
    console.log('Elements: ' + categorie.querySelectorAll('li').length)
})