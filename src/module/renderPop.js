const close = document.querySelector('.close');

export default function renderPopUp(data) {
  // console.log('hello');
}

close.addEventListener('click', () => {
  document.querySelector('.pop-ups').classList.toggle('hide');
});
