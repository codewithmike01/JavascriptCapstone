import './index.css';
import callPoke, { getDetail } from './module/pokeCall.js';
import renderStructure from './module/renderStruc.js';
import getLikes from './module/addLikes.js';

async function Stater() {
  const data = await callPoke();
  await getDetail(data);
  await renderStructure(data);
}

Stater();
getLikes();
