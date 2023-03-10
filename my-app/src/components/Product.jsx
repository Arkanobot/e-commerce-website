import React from "react";
import "../style/Product.css";
import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useStateValue } from "./StateProvider";
import { ADD_TO_CART } from "./constants/constants";

function Product({ id, title, image, price, rating }) {
  /* creating a state */
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="product__ratingStar" />
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addTocart}>Add to Cart</button>
    </div>
  );
}

export default Product;
