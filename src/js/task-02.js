const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.innerHTML = ingredient
  ul.appendChild(li)
});
