const popUps = document.querySelector('.pop-ups');
let popCards = '';
export default function renderPopUp(data) {
  const name = data.name;
  const id = data.id;
  const img = data.sprites.other['official-artwork'].front_default;

  popCards += ` <div class="popup-info" id='${id}'>
  <div class="image">
    <img src="${img}" alt="" />
    <div class="close">&times;</div>
  </div>
  <div class="details">
    <h3>${name}</h3>
    <div class="details-info">
      <div class="left">
        <h4>Fuel: titanium</h4>
        <h4>Length: 100,000</h4>
      </div>
      <div class="right">
        <h4>Weight:400</h4>
        <h4>Power: 100,000,000</h4>
      </div>
    </div>
  </div>

  <div class="comments">
    <h4>Comments (2)</h4>
    <ul class="comments-info">
      <li><span class="time">03/11/2021 </span> Alex: I'd love to buy</li>
      <li><span class="time">03/11/2021 </span> Mia: I love</li>
    </ul>
  </div>

  <form action="#">
    <label for="form Add comment"> <h5>Add a comment</h5></label>
    <input type="text" placeholder="Your name" />
    <textarea
      name="comment-text"
      id="text"
      cols="30"
      rows="7"
      placeholder="Your insight"
    ></textarea>
    <button class="btn">Comment</button>
  </form>
</div>`;

  popUps.innerHTML = popCards;
}

popUps.addEventListener('click', (event) => {
  if (event.target.className === 'close') {
    const parentHit = event.target.parentNode.parentNode;
    parentHit.classList.toggle('hide');
  }
});
//   item.addEventListener('click', () => {
//     console.log('hello');
//     document.querySelector('.pop-ups').classList.toggle('hide');
//   });
// });
