import React from "react";
import bannerBackground from "../img/background_img.jpg";
import "../style/Home.css";
import Product from "./Product";
import bookImg from "../img/lean_start_up.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={bannerBackground} alt="" />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup, By Eric Ries"
            price={19.99}
            rating={5}
            image={bookImg}
          />
          <Product
            id="2"
            title="Samsung LC49RG90SSUXEN Smart Watch"
            price={190.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="3"
            title="The Lean Startup, By Eric Ries"
            price={19.99}
            rating={5}
            image={bookImg}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="The Lean Startup, By Eric Ries"
            price={19.99}
            rating={5}
            image={bookImg}
          />
          <Product
            id="5"
            title="Samsung LC49RG90SSUXEN Smart Watch"
            price={190.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />{" "}
          <Product
            id="6"
            title="The Lean Startup, By Eric Ries"
            price={19.99}
            rating={5}
            image={bookImg}
          />
          <Product
            id="7"
            title="Samsung LC49RG90SSUXEN Smart Watch"
            price={190.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="8"
            title="The Lean Startup, By Eric Ries"
            price={19.99}
            rating={5}
            image={bookImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
