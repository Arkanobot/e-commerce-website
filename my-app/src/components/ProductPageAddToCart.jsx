import React from "react";
import "../style/ProductPageAddToCart.css";
import { useStateValue } from "./StateProvider";
import { ADD_TO_CART } from "./constants/constants";
import CurrencyFormat from "react-currency-format";

function AddToCart({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addTocart = () => {
    //dispatch the item to the context
    dispatch({
      type: ADD_TO_CART,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="addtocart">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <strong>{value}</strong> {/* {`${value}`} instead of 0 */}
            </p>
          </>
        )}
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
      />
      <button className="addtocart__cart" onClick={addTocart}>
        Add to Cart
      </button>
      <button className="addtocart__buyNow">Buy Now</button>
    </div>
  );
}

export default AddToCart;
