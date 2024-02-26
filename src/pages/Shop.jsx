import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import getStoreItems from "../utils/getItems";
import ItemCard from "../components/shop/ItemCard";
import getCartSize from "../utils/getCartSize";

function Shop() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});
  useEffect(() => {
    getStoreItems(setItems);
  }, []);

  const addToCart = (id, amount) => {
    if (getCartSize(cart) < 5000) {
      // arbitrary cart size limit
      if (id in cart) {
        setCart({
          ...cart,
          [id]: cart[id] + amount,
        });
      } else {
        setCart({
          ...cart,
          [id]: amount,
        });
      }
    }
  };

  return (
    <>
      <Navbar cart={cart} />
      <h2 className="text-5xl font-bold m-8">Best Sellers</h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 standard-width">
        {items.map((item) => {
          return (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price.toFixed(2)}
              imageUrl={item.image}
              addToCart={addToCart}
            />
          );
        })}
      </div>
      <span>
        Checkout functionality implemented never. Shop to your heart&apos;s
        content!
      </span>
    </>
  );
}

export default Shop;
