// gets items from Fake Store API
export async function getStoreItems() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getItem(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
