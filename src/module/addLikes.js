const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FmntFuxK5T09jvOkFrA6/likes';

const postLikes = async (id) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response;
};

const getLikes = async () => {
  const like = await fetch(url);
  const data = await like.json();
  return data;
};

const updatLikes = async (id) => {
  console.log(id);
  const likesData = await getLikes();
  let results = 0;
  likesData.forEach((element) => {
    console.log(id);
    if (element.item_id === id) {
      element.likes += 1;
      results = element.likes;
      console.log('hello');
    }
  });
  return results;
};

const container = document.querySelector('.grid-container');
container.addEventListener('click', (e) => {
  if (e.target.className === 'far fa-heart likes') {
    const targetEl = e.target;
    const likesId = targetEl.parentNode.querySelector('span').id;

    postLikes(likesId);
    updatLikes(likesId);
  }
});
export default updatLikes;
