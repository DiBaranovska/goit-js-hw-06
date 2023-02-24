const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let listEl = document.querySelector("#ingredients");

const textItem = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");
  return itemEl;
});
listEl.append(...textItem);
