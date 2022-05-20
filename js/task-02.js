const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients')

const newIngredient = (ingredient) => {
  const item = document.createElement('li')
  item.textContent = ingredient
  item.classList.add("item")

  return item
}

const newIngredients = ingredients.map(newIngredient)

ingredientsList.append(...newIngredients)