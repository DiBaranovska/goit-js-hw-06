const formEl = document.forms[0];

const mailEl = formEl.elements.email;
const passwordEl = formEl.elements.password;

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (mailEl.value && passwordEl.value !== '') {
    console.log({
      name: mailEl.value,
      password: passwordEl.value,
    });
    event.target.reset();
  } else {
    alert('Мають бути заповнені усі поля');
  }
});
