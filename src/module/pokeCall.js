import renderPopUp from './renderPop';
import renderStructure from './renderStruc';

export async function getDetail(dataGet) {
  dataGet = dataGet.results;
  dataGet.forEach(async (item) => {
    const respones = await fetch(`${item.url}`);
    const data = await respones.json();
    renderStructure(data);
    renderPopUp(data);
  });
}

export default async function callPoke() {
  const response = await fetch(' https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  return data;
}
