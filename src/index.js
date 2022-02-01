import './index.css';
import callPoke, { getDetail } from './module/pokeCall.js';

async function Stater() {
  const data = await callPoke();
  await getDetail(data);
}

Stater();
