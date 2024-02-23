import PropTypes from "prop-types";

function ItemCard({ title, price, imageUrl }) {
  return (
    <div className="max-w-sm flex flex-col p-2 border-gray-600 border-2 rounded-lg">
      <img
        className="h-96 object-contain"
        src={imageUrl}
        alt={title + " image"}
      />
      <h4 className="mb-4">{title}</h4>
      <span className="mt-auto">${price}</span>
    </div>
  );
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ItemCard;
