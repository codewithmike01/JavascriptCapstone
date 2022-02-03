// ID FOR API Jn2Mh8nYExszQ1ziounn
// eslint-disable-next-line import/no-cycle
import { popUps, buttonStruct } from './renderPop.js';
import commentCount from './commentCount.js';

function alertErr(p) {
  p.innerText = 'No value entered';
  setTimeout(() => {
    p.innerText = '';
  }, 3000);
}

export default async function getpostInvolveCommentApi(id) {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jn2Mh8nYExszQ1ziounn/comments?item_id=${id}`
  );
  const data = await response.json();
  let hope = '';
  let arrObj = [];
  if (data.length) {
    const hopeLength = data.length;
    data.forEach(async (item) => {
      hope += `
      <li><span class="time">${item.creation_date}</span> ${item.username}: ${item.comment}</li>`;
    });
    arrObj.push({ count: hopeLength, show: hope });
    return arrObj;
    // eslint-disable-next-line no-else-return
  } else {
    arrObj = [];
    arrObj.push({ count: 0, show: hope });
    return arrObj;
  }
}

// Involment Api call
async function postInvolveCommentApi(id, name, userComment) {
  const userObj = {
    item_id: id,
    username: name,
    comment: userComment,
  };
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jn2Mh8nYExszQ1ziounn/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
      // eslint-disable-next-line comma-dangle
    }
  );
  const data = await response.json();
  return data;
}

function appendElement(parentComment, name, msgText) {
  parentComment.innerHtml = '';
  const date = new Date();
  let month = 1 + date.getMonth();
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  const li = document.createElement('li');
  li.innerText = `${date.getFullYear()}-${month}-${day}  ${name}: ${msgText}`;
  parentComment.appendChild(li);
  const comment = parentComment.querySelectorAll('li');
  const count = commentCount(comment);
  const head = parentComment.parentNode.querySelector('.comment-head');
  head.innerText = `Comments (${count})`;
}

function getForm(item) {
  const { id } = item;
  const form = item.querySelector('form');
  const p = item.querySelector('.red-alert');
  const comment = item.querySelector('.comments-info');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputValue = form.querySelector('.input-name');
    const textValue = form.querySelector('.msg');
    if (inputValue.value.trim() !== '' && textValue.value.trim() !== '') {
      postInvolveCommentApi(
        id,
        inputValue.value.trim(),
        textValue.value.trim()
      );
    } else {
      alertErr(p);
    }
    appendElement(comment, inputValue.value.trim(), textValue.value.trim());
    inputValue.value = '';
    textValue.value = '';
  });
}

function getParentId() {
  const parentPop = popUps.querySelectorAll('.popup-info');
  parentPop.forEach((item) => {
    if (item.className !== 'popup-info hide') {
      popUps.removeEventListener('click', getParentId);
      getpostInvolveCommentApi(item.id);
      getForm(item);
    }
  });
}

buttonStruct.addEventListener('click', (e) => {
  if (e.target.className === 'btn') {
    popUps.addEventListener('click', getParentId());
  }
});
