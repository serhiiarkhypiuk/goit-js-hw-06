const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = document.getElementById('ingredients')

ingredients.forEach(ingredient => {
  let element = document.createElement('li')
  element.innerHTML = ingredient
  ingredientsList.append(element)
})

console.log(ingredientsList)