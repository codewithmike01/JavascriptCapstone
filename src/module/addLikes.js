const container = document.querySelector('.grid-container');

// eslint-disable-next-line operator-linebreak
const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FmntFuxK5T09jvOkFrA6/likes';

const postLikes = async (id) => {
  const userLikes = { item_id: id };
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userLikes),
  });
  return response;
};

const getLikes = async () => {
  const like = await fetch(url);
  const data = await like.json();
  return data;
};

const updatLikes = async (id) => {
  const likesData = await getLikes();
  let results = 0;
  likesData.forEach((element) => {
    if (element.item_id.toString() === id.toString()) {
      results = element.likes;
    }
  });
  return results;
};

const addElements = (e) => {
  const currentNumber = e.innerText;
  e.innerText = parseInt(currentNumber, 10) + 1;
};

export const displayCounts = (countData) => {
  const counts = document.querySelector('.active');
  counts.innerText = `Pokemons (${countData})`;
};

container.addEventListener('click', (e) => {
  if (e.target.className === 'far fa-heart likes') {
    const targetElement = e.target;
    const likesId = targetElement.parentNode.querySelector('span').id;
    const likeL = targetElement.parentNode.querySelector('span');
    postLikes(likesId);
    updatLikes(likesId);
    addElements(likeL);
  }
});

export default updatLikes;
