const buttons = document.querySelectorAll('.card__btn');
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    window.location.href = 'http://localhost:9500/item.html#';
  });
});
