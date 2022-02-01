export async function getDetail(dataGet) {
  const arrData = [];
  dataGet = dataGet.results;
  dataGet.forEach(async (item) => {
    const respones = await fetch(`${item.url}`);
    const data = await respones.json();
    arrData.push({
      name: data.name,
      id: data.id,
      img: data.sprites.other['official-artwork'].front_default,
    });
  });
  console.log(arrData);
  return arrData;
}

export default async function callPoke() {
  const response = await fetch(' https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();

  return data;
}
