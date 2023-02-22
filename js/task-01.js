const itemEl = document.querySelectorAll("li.item");

console.log("Number of categories: " + itemEl.length);

const titles = itemEl.forEach(function (title) {
  console.log(
    "Category: " +
      title.firstElementChild.innerText +
      "\n" +
      "Elements: " +
      title.firstElementChild.nextElementSibling.children.length
  );
});
