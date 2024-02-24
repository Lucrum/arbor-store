import { Link } from "react-router-dom";
import LogoLarge from "./LogoLarge";
import PropTypes from "prop-types";
import Cart from "./shop/Cart";

function Navbar({ cart }) {
  return (
    <div className="w-full bg-orange-400 sticky top-0">
      <div className="flex items-center justify-center max-w-screen-xl mx-auto px-8 py-2">
        <Link to="/" className="text-3xl">
          Home
        </Link>
        <LogoLarge />

        {cart ? (
          <Cart cart={cart} />
        ) : (
          <Link to="/shop" className="text-3xl">
            Shop
          </Link>
        )}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  cart: PropTypes.object,
};

export default Navbar;
