import DogCard from "./DogCard";
import PropTypes from "prop-types";

function CardColumn({ dogs }) {
  return (
    <section className="flex flex-col gap-6 w-1/2 flex-grow">
      {dogs.map((dog) => {
        return (
          <DogCard
            key={dog.name}
            name={dog.name}
            imgSrc={dog.image}
            imgAlt={dog.alt}
            desc={dog.desc}
          />
        );
      })}
    </section>
  );
}

CardColumn.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
      desc: PropTypes.string,
    })
  ).isRequired,
};

export default CardColumn;
