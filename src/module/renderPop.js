// eslint-disable-next-line import/no-cycle
import getpostInvolveCommentApi from './involvementCall.js';
export const popUps = document.querySelector('.pop-ups');
export const buttonStruct = document.querySelector('.grid-container');
const gridItem = document.querySelector('.grid-container');
let popCards = '';

function popUpToggle(id) {
  const popItems = popUps.querySelectorAll('.popup-info');

  popItems.forEach((item) => {
    if (id === item.id) {
      popUps.classList.toggle('hide');
      item.classList.toggle('hide');
      gridItem.classList.toggle('isDisable');
    }
  });
}

export default async function renderPopUp(data) {
  const moves = data.moves['0'].move.name;
  const { weight } = data;
  const { height } = data;
  const ability = data.abilities[0].ability.name;
  const { name } = data;
  const { id } = data;
  const img = data.sprites.other['official-artwork'].front_default;
  const comment = await getpostInvolveCommentApi(id);

  popCards += ` <div class="popup-info hide" id='${id}'>
  <div class="image">
    <img src="${img}" alt="" />
    <div class="close">&times;</div>
  </div>
  <div class="details">
    <h3>${name}</h3>
    <div class="details-info">
      <div class="left">
        <h4>Move: ${moves}</h4>
        <h4>Length: ${height}cm</h4>
      </div>
      <div class="right">
        <h4>Weight: ${weight}pounds</h4>
        <h4>Power: ${ability}</h4>
      </div>
    </div>
  </div>

  <div class="comments">
    <h4 class='comment-head'>Comments (${comment[0].count})</h4>
    <ul class="comments-info">
     ${comment[0].show}
    </ul>
  </div>

  <form action="#">
    <label for="form Add comment"> <h5>Add a comment</h5></label>
    <input type="text" placeholder="Your name" class="input-name" required/>
    <textarea
      name="comment-text"
      id="text"
      cols="30"
      rows="7"
      placeholder="Your insight"
    class="msg" required></textarea>
    <div class="btn-layout">
    <button type="submit" class="btn">Comment</button>
    <p class="red-alert"></p>
    </div>
  </form>
</div>`;

  popUps.innerHTML = popCards;
}

// Event listeners

buttonStruct.addEventListener('click', (event) => {
  if (event.target.className === 'btn') {
    // eslint-disable-next-line prefer-destructuring
    const id = event.target.parentNode.id;
    popUpToggle(id);
  }
});

popUps.addEventListener('click', (event) => {
  if (event.target.className === 'close') {
    const parentHit = event.target.parentNode.parentNode;
    popUps.classList.toggle('hide');
    parentHit.classList.toggle('hide');
    gridItem.classList.toggle('isDisable');
  }
});
