import PropTypes from "prop-types";
import Counter from "./Counter";

function ItemCard({ id, title, price, imageUrl }) {
  const addToCart = (id, amount) => {
    console.log("Adding to cart");
    console.log(id, amount);
  };
  return (
    <div className="max-w-sm flex flex-col p-2 border-gray-600 border-2 rounded-lg">
      <img
        className="h-96 object-contain"
        src={imageUrl}
        alt={title + " image"}
      />
      <h4 className="mb-4">{title}</h4>
      <span className="mt-auto">${price}</span>
      <Counter id={id} addToCart={addToCart} />
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ItemCard;
