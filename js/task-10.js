function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const conteinerEl = document.querySelector('#controls');
const inputEl = conteinerEl.firstElementChild;
const buttonCreateEl = inputEl.nextElementSibling;
const buttonDestroyEl = conteinerEl.lastElementChild;
const newConteinersEls = document.querySelector('#boxes');
const amount = 0;
let conteinerList = [];
let height = 20;
let width = 20;
function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    const itemEl = document.createElement('div');
    itemEl.style.height = `${(height += 10)}px`;
    itemEl.style.width = `${(width += 10)}px`;
    itemEl.style.backgroundColor = getRandomHexColor();
    conteinerList.push(itemEl);
  }
  return newConteinersEls.append(...conteinerList);
}
buttonCreateEl.addEventListener('click', createBoxes);

buttonDestroyEl.addEventListener('click', event => {
  newConteinersEls.innerHTML = '';
  conteinerList = [];
  height = 20;
  width = 20;
});
