const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const element = document.createElement('li')
  console.log(element)
  element.textContent = ingredient
  element.className = "item"
  document.querySelector("ul#ingredients").append(element)
})