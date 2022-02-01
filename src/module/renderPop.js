const close = document.querySelector('.close');

export default function renderPopUp(data) {
  // console.log('POP ', data);
}

close.addEventListener('click', () => {
  document.querySelector('.pop-ups').classList.toggle('hide');
});
