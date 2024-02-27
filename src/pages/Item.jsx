import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getItem } from "../utils/storeApi";
import ItemDisplay from "../components/shop/ItemDisplay";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getItem(id);
      setItem(data);
    };
    getData();
  }, [id]);

  console.log(item);

  if (item) {
    return (
      <div>
        <Navbar />
        <div className="standard-width">
          <ItemDisplay item={item} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Item;
