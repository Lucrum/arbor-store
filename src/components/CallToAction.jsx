import CardColumn from "./CardColumn";

function CallToAction() {
  const dogsOne = [
    {
      name: "Peanut",
      image: "src/assets/images/dogs/alvan-nee.jpg",
      alt: "Cute dog by Alvan Nee",
    },
    {
      name: "Apollo",
      image: "src/assets/images/dogs/undine-tackmann.jpg",
      alt: "Cute dog by Undine Tackmann",
    },
    {
      name: "Scooter",
      image: "src/assets/images/dogs/charlesdeluvio.jpg",
      alt: "Cute dog by Charles Deluvio",
    },
  ];
  const dogsTwo = [
    {
      name: "Charlie",
      image: "src/assets/images/dogs/good-days-digital.jpg",
      alt: "Cute dog by Good Days Digital",
    },
    {
      name: "Chip",
      image: "src/assets/images/dogs/milli.jpg",
      alt: "Cute dog by Milli",
    },
    {
      name: "Tulip",
      image: "src/assets/images/dogs/richard-brutyo.jpg",
      alt: "Cute dog by Richard Brutyo",
    },
  ];
  return (
    <div className="mb-10">
      <span>
        With every purchase, 100% of all proceeds go to telling all dogs they
        are good boys.
      </span>
      <br />
      <span>This is definitely not an excuse to show off more dogs.</span>
      <div className="flex gap-5 flex-wrap md:flex-nowrap">
        <CardColumn dogs={dogsOne} />
        <CardColumn dogs={dogsTwo} />
      </div>
    </div>
  );
}

export default CallToAction;
