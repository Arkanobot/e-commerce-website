import React from "react";
import "../style/Product.css";
import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useStateValue } from "./StateProvider";
import { ADD_TO_BASKET } from "./constants/constants";

function Product({ id, title, image, price, rating }) {
  /* creating a state */
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item to the context
    dispatch({
      type: ADD_TO_BASKET,
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
