function getCartSize(cart) {
  let itemCount = 0;
  for (const itemId in cart) {
    itemCount += cart[itemId];
  }
  return itemCount;
}

export default getCartSize;
