import updatLikes, { itemsCounter } from './addLikes.js';

const renderStructure = async (data) => {
  const { name } = data;
  const { id } = data;
  const img = data.sprites.other['official-artwork'].front_default;

  const like = await updatLikes(id);
  const list = document.getElementById('list-items');
  list.innerHTML += `<div class="grid-item" id ="${id}">
    <img src="${img}" alt="" />
    <div class="space-item">
      <h4>${name}</h4>
      <i class="far fa-heart likes"></i>
      <div class="span-items">
      <span id="${id}">${like}</span>
      </div>
    </div>
    <button type="button" class="btn">Comments</button>
  </div>`;
  // if (data.length ===20)
};

export default renderStructure;
