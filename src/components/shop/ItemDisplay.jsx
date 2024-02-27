import PropTypes from "prop-types";

function ItemDisplay({ item }) {
  return (
    <div className="flex border-gray-600 border-8 h-96 rounded-xl">
      <img className="w-72 object-contain" src={item.image} />
      <div className="flex flex-col bg-gray-300 rounded-r">
        <h4 className="text-3xl m-8 text-left">{item.title}</h4>
        <span className="text-lg m-8 text-left">{item.description}</span>
        <span className="ml-8 text-left">
          Rating: {item.rating.rate} from {item.rating.count} reviews
        </span>
      </div>
    </div>
  );
}

ItemDisplay.propTypes = {
  item: PropTypes.object,
};

export default ItemDisplay;
