import React from "react";
import "../style/Checkout.css";
import checkoutBanner from "../img/checkout_banner.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import checkoutBannerEmpty from "../img/empty_checkout_banner.png";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout__main">
      <div className="checkout__img">
        {cart?.length >= 1 ? (
          <img
            src={checkoutBanner}
            alt="Did you Miss Anything ?"
            className="checkout__banner"
          />
        ) : (
          <img
            src={checkoutBannerEmpty}
            alt="Did you Miss Anything ?"
            className="checkout__banner"
          />
        )}
      </div>
      <div className="checkout">
        <div className="checkout__left">
          <h3>
            {" "}
            Hello,
            {user
              ? user?.displayName
                ? `${user?.displayName}`
                : ` ${user?.email}`
              : `Guest`}
          </h3>
          <h2 className="checkout__title">Your shopping cart</h2>
          {/* checkout product here */}
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout__right">
          <div>
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
