import updatLikes from './addLikes.js';

const renderStructure = async (data) => {
  const name = data.name;
  const id = data.id;
  const img = data.sprites.other['official-artwork'].front_default;

  const simplifyLikes = async (id) => {
    const respData = await updatLikes();

    for (let i = 0; i < respData.length; i += 1) {
      if (respData[i].item_id === id) {
        let likesStore = respData[i].likes;
        if (likesStore === undefined || likesStore === null) {
          likesStore = 0;
          return likesStore;
        }
        return likesStore;
      }
    }
  };
  const like = await simplifyLikes(data.id);
  // console.log(like);
  const list = document.getElementById('list-items');
  list.innerHTML += `<div class="grid-item">
    <img src="${img}" alt="" />
    <div class="space-item">
      <h4>${name} ${id}</h4>
      <i class="far fa-heart likes"></i>
      
      <div class="span-items">
      <span id="${id}">${like}</span>
      <p>Likes</p>
      </div>
    </div>
    <button type="button" class="btn">Comments</button>
  </div>`;
};

export default renderStructure;
