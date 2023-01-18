import React, { useState } from "react";
import "../style/ProductPage.css";
import StarIcon from "@mui/icons-material/Star";
import AddToCart from "./ProductPageAddToCart";
import BookImg from "../img/lean_start_up.png";
import CurrencyFormat from "react-currency-format";

// id="1"
// title="The Lean Startup, By Eric Ries"
// price={19.99}
// rating={5}
// image={bookImg}
// [
//     { name: "Rajvir", review: "Good Book! Must Read" },
//     { name: "Rajvir", review: "Good Book! Must Read" },
//     { name: "Rajvir", review: "Good Book! Must Read" },
//     { name: "Rajvir", review: "Good Book! Must Read" },
//   ]

function ProductPage({
  id = 2,
  title = "The Lean Startup, By Eric Ries",
  image = BookImg,
  detail = "This is a random book by a random author lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla This is a random book by a random author lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla This is a random book by a random author lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla lorem impsum dolor bla bla bla bla bla",
  price = 399.29,
  rating = 5,
  reviews,
}) {
  const [review, setReview] = useState([
    {
      name: "Anonymous",
      userReview: "Raaandom Raaatingg 4 star",
      userRating: 4,
    },
    {
      name: "Anonymous123",
      userReview: "Raaandom Raaatingg 1 star",
      userRating: 1,
    },
    {
      name: "Anonymous11",
      userReview: "Raaandom Raaatingg 5 star",
      userRating: 5,
    },
    {
      name: "Anonymous",
      userReview: "Raaandom Raaatingg 5 star",
      userRating: 5,
    },
    {
      name: "Anonymous22",
      userReview: "Raaandom Raaatingg 5 star",
      userRating: 5,
    },
    {
      name: "Anonymous",
      userReview: "Raaandom Raaatingg 5 star",
      userRating: 5,
    },
  ]);

  // const [productDetails, setProductDetails] = useState([{details: {}}{about:{}}]);

  return (
    <div className="productPage">
      <div className="productPage__itemHeader">
        {/* mini product page details goes here ... item img, name, rating, price */}
        <img className="productPage__headerImg" src={image} alt={title} />
        <p className="productPage__headerName">{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="product__ratingStar" />
            ))}
        </div>

        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                <strong className="productPage__headerProductPrice">
                  {value}
                </strong>
                {/* {`${value}`} instead of 0 */}
              </p>
            </>
          )}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹ "}
        />
      </div>
      <div className="productPage__productDetails">
        {/*Entire product details go here */}
        <div className="productPage__productImage">
          {/* product image goes here */}
          <img className="productPage__productImage" src={image} alt={title} />
        </div>
        <div className="productPage__productDescription">
          {/* entire product description goes here inside the divs */}
          <div className="productPage__productTitle">
            <h2 className="productPage__productName">{title}</h2>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <StarIcon className="product__ratingStar" />
                ))}
            </div>
          </div>
          <div className="productPage__productPrice">
            {/* product price or price range goes here */}

            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    <strong
                      style={{ "font-size": "1.3rem", "font-weight": "450" }}
                    >
                      Price: ₹{" "}
                    </strong>
                    <h3 style={{ color: "#b82704", display: "inline-block" }}>
                      {value}
                    </h3>
                  </p>
                </>
              )}
              decimalScale={2}
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={""}
            />
            <small>inclusive of all taxes</small>
          </div>
          <div className="productPage__itemDetails">
            {/* product item details go here */}
            <h4>Product Details</h4>
            <p className="productPage__itemDetailsP">{detail}</p>
          </div>
          <div className="productPage__itemAbout">
            {/* details ABOUT the item goes here - casual cloth/ electronic etc*/}
            <h4>About this item</h4>
            <p className="productPage__about">{detail}</p>
          </div>
        </div>
        <div className="productPage__addToCart">
          {/* add to cart component goes here  */}
          <AddToCart
            id={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
          />
        </div>
      </div>
      <div className="productPage__reviews">
        <div className="productPage__customerRating">
          <h3>Customer Reviws</h3>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="product__ratingStar" />
              ))}
          </div>
          <strong>{rating} out of 5</strong>
          <p>({review.length}) Global Ratings</p>
        </div>

        <div className="productPage__productReviews">
          {/* product reviews goes here  */}
          <h3>What others say about this product</h3>
          {review.map((rev) => (
            <div className="productPage__userReviews">
              <strong>{rev.name}</strong>
              <p>{rev.userReview}</p>
              {Array(rev.userRating)
                .fill()
                .map((_, i) => (
                  <StarIcon className="product__ratingStar" />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
