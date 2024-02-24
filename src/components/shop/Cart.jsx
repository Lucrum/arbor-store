import PropTypes from "prop-types";
import getCartSize from "../../utils/getCartSize";

function Cart({ cart }) {
  return (
    <>
      <img className="w-10" src="src/assets/icons/cart-outline.svg" alt="" />
      <p className="text-4xl">{getCartSize(cart)}</p>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
};

export default Cart;
