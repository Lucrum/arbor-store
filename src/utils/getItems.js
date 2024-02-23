// gets items from Fake Store API

async function getStoreItems(setItems) {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  setItems(data);
}

export default getStoreItems;
