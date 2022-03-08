import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
          alt=""
        />
        <div className="home__raw">
          <Product
            id="123456"
            title="kjdsajdfasd"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
          />
          <Product
            id="123456"
            title="kjdsajdfasd"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
          />
        </div>

        <div className="home__raw">
          <Product
            id="123456"
            title="kjdsajdfasd"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
          />
          <Product
            id="123456"
            title="kjdsajdfasd"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
          />
          <Product
            id="123456"
            title="kjdsajdfasd"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
          />
        </div>

        <div className="home__raw">
          <Product
            id="123456"
            title="kjdsajdfasd"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
