import { useState } from "react";
import PropTypes from "prop-types";

function Counter({ id, addToCart }) {
  const [amount, setAmount] = useState(1);

  const decrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const increment = () => {
    if (amount < 0) {
      setAmount(1);
    } else {
      setAmount(amount + 1);
    }
  };

  const enterAmount = (e) => {
    const newAmount = parseInt(e.target.value);
    if (isNaN(newAmount)) {
      setAmount(0);
    } else if (newAmount >= 500) {
      setAmount(500);
    } else {
      setAmount(newAmount);
    }
  };

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData; // window.clipboardData may be incorrect
    const pastedData = parseInt(clipboardData.getData("text"));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="flex">
        <button className="bg-gray-100 p-2 rounded-lg" onClick={decrement}>
          -
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="amount"
          id="amount"
          className="box-border w-full text-center"
          onKeyDown={preventMinus}
          onPaste={preventPasteNegative}
          value={amount.toString()}
          onChange={enterAmount}
        />
        <button className="bg-gray-100 p-2 rounded-lg" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="bg-orange-300 w-full rounded-lg mt-2"
        onClick={() => addToCart(id, amount)}
      >
        Add to Cart
      </button>
    </div>
  );
}

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Counter;
