import './index.css';
import callPoke, { getDetail } from './module/pokeCall.js';
import renderStructure from './module/renderStruc.js';
import renderPopUp from './module/renderPop.js';

async function Stater() {
  const data = await callPoke();
  const dataSimp = await getDetail(data);
  console.log(dataSimp[0]);
  console.log(dataSimp.length);
  renderStructure(dataSimp);
  renderPopUp(dataSimp);
}

Stater();
