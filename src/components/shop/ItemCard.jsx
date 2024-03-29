import PropTypes from "prop-types";
import Counter from "./Counter";
import { Link } from "react-router-dom";

function ItemCard({ id, title, price, imageUrl, addToCart }) {
  return (
    <div className="max-w-sm flex flex-col p-2 border-gray-600 border-2 rounded-lg">
      <Link to={`item/${id}`}>
        <>
          <img
            className="h-96 object-contain"
            src={imageUrl}
            alt={title + " image"}
          />
          {title}
        </>
      </Link>
      <span className="mt-auto">${price}</span>
      <Counter id={id} addToCart={addToCart} />
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ItemCard;
