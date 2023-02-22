const itemAllEl = document.querySelectorAll("li.item");

console.log("Number of categories: " + itemAllEl.length);

const titleEl = document.querySelectorAll("h2");
const title = titleEl.forEach(function (title) {
  console.log(
    "Category: " +
      title.innerText +
      "\n" +
      "Elements: " +
      title.nextElementSibling.children.length
  );
});
