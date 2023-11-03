import React from "react";
import { Link } from "react-router-dom";

export const Car = (props) => {
  const { id, model, price, image } = props.data;

  return (
    <div className="product">
      <img src={image} height="300" />
      <div className="description">
        <h2>{model}</h2>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Buy</button>
      <Link className="info-link" to={`https://en.wikipedia.org/wiki/${model}`}>
        GO to
      </Link>
    </div>
  );
};
