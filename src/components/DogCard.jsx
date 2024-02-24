import PropTypes from "prop-types";

function DogCard({ name, imgSrc, imgAlt, desc }) {
  return (
    <div className="p-8 rounded bg-slate-300">
      <img src={imgSrc} alt={imgAlt} />
      <div className="flex justify-center">
        <h3 className="italic text-xl rounded-md px-3 mt-3 bg-stone-200">
          {name}
        </h3>
      </div>

      <p>{desc}</p>
    </div>
  );
}

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  desc: PropTypes.string,
};

export default DogCard;
