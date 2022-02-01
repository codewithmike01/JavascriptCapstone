const renderStructure = (data) => {
  const { name } = data;
  const { id } = data;
  const img = data.sprites.other['official-artwork'].front_default;

  const list = document.getElementById('list-items');
  list.innerHTML += `<div class="grid-item" id="${id}">
  <img src="${img}" alt="" />
  <div class="space-item">
    <h4>${name} </h4>
    <i class="far fa-heart"></i>
  </div>
  <button type="button" class="btn">Comments</button>
</div>`;
};

export default renderStructure;
