const modal = document.querySelector('#openModal');
const btnOpenBuy = document.querySelector('.item__btn__buy');
const btnClose = document.querySelector('.modal__close');
const btnOpenClick = document.querySelector('.item__btn__toBasket');
const btnOpenPhoto = document.querySelector('.item__photoMain');
const contextForm = document.querySelector('.modal__content__one');
const contextBacket = document.querySelector('.modal__content__two');
const contextPhoto = document.querySelector('.modal__content__three');
const dialog = document.querySelector('.modal__dialog');

if (btnOpenBuy) {
  btnOpenBuy.addEventListener('click', OpenForm);
}
if (btnOpenClick) {
  btnOpenClick.addEventListener('click', OpenBacket);
}

if (btnOpenPhoto) {
  btnOpenPhoto.addEventListener('click', OpenPhoto);
}

if (btnClose) {
  btnClose.addEventListener('click', Close);
}

function OpenForm() {
  contextForm.style.display = 'block';
  contextPhoto.style.display = 'none';
  contextBacket.style.display = 'none';
  modal.style.display = 'block';
}

function OpenBacket() {
  contextForm.style.display = 'none';
  contextPhoto.style.display = 'none';
  contextBacket.style.display = 'block';
  modal.style.display = 'block';
}

function OpenPhoto() {
  dialog.style.width = '1280px';
  dialog.style.height = '684px';
  dialog.style.left = 'calc(50% - 640px)';

  contextForm.style.display = 'none';
  contextBacket.style.display = 'none';
  contextPhoto.style.display = 'block';
  modal.style.display = 'block';
}

function Close() {
  modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
