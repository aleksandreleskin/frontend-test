const card = document.querySelector('#card');

card.addEventListener('click', event => {
  card.classList.add('active');
});

window.addEventListener('click', event => {
  const its_card = event.target === card || card.contains(event.target);

  !its_card && card.classList.remove('active');
});

const cardTextField = document.querySelector('#card__text-field');

cardTextField.addEventListener('input', event => {
  const parts = cardTextField.innerHTML.split('//', 2);

  cardTextField.innerHTML =
    cardTextField.innerHTML.replace(`//${parts[1]}`, `<span>//${parts[1]}</span>`);

  const range = document.createRange();
  range.selectNodeContents(cardTextField);
  range.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  if (!cardTextField.textContent) {
    cardTextField.innerHTML = '';
  }
});