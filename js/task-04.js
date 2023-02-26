const buttonList = document.querySelector('#counter');

const buttonDecrementEl = buttonList.firstElementChild;
const buttoIncrementEl = buttonList.lastElementChild;
const resultEl = buttonDecrementEl.nextElementSibling;
let counterValue = 0;

buttonDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  resultEl.textContent = counterValue;
  return;
});

buttoIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  resultEl.textContent = counterValue;
  return;
});
