import PropTypes from "prop-types";

function Cart({ itemCount }) {
  return (
    <>
      <img className="w-10" src="src/assets/icons/cart-outline.svg" alt="" />
      <p className="text-3xl">{itemCount ? itemCount : 0}</p>
    </>
  );
}

Cart.propTypes = {
  itemCount: PropTypes.number,
};

export default Cart;
