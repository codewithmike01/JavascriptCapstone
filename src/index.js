import './index.css';
import './module/involvementCall.js';
import callPoke, { getDetail } from './module/pokeCall.js';
import renderStructure from './module/renderStruc.js';

async function Stater() {
  const data = await callPoke();
  await getDetail(data);
}

Stater();

window.addEventListener('load', (e) => {
  e.preventDefault();
  renderStructure();
});
