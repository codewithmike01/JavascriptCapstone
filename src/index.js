import './index.css';
import './module/involvementCall.js';
import callPoke, { getDetail } from './module/pokeCall.js';
import renderStructure from './module/renderStruc.js';
import itemsCounter from './module/counter.js';
import { displayCounts } from './module/addLikes.js';

async function Stater() {
  const data = await callPoke();
  const itemsCount = itemsCounter(data.results);
  displayCounts(itemsCount);

  await getDetail(data);
  await renderStructure(data);
}

Stater();
