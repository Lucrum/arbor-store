import PropTypes from "prop-types";

function Cart({ cart }) {
  let itemCount = 0;

  for (const itemId in cart) {
    itemCount += cart[itemId];
  }
  return (
    <>
      <img className="w-10" src="src/assets/icons/cart-outline.svg" alt="" />
      <p className="text-4xl">{itemCount}</p>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
};

export default Cart;
