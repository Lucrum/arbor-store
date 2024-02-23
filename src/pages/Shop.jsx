import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import getStoreItems from "../utils/getItems";
import ItemCard from "../components/shop/ItemCard";

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getStoreItems(setItems);
  }, []);

  return (
    <>
      <Navbar cart={true} />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 standard-width">
        {items.map((item) => {
          return (
            <ItemCard
              key={item.id}
              title={item.title}
              price={item.price.toFixed(2)}
              imageUrl={item.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default Shop;
