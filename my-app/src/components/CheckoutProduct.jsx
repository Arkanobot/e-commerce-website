import React from "react";
import "../style/CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";
import { REM_FROM_CART } from "./constants/constants";
// import StarHalfIcon from "@mui/icons-material/StarHalf";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromcart = () => {
    //remove the item from the cart
    dispatch({
      type: REM_FROM_CART,
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checoutProduct__price">
          <small>₹</small> <strong>{price}</strong>{" "}
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="product__ratingStar" />
            ))}
        </div>
        <button onClick={removeFromcart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
