import React, { useEffect, useState } from "react";
import "../../App.css";
import { CARS } from "../../CARS";
import { Car } from "./Car";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Your Garage</h1>
      </div>
      <div className="products">
        {CARS.map((car) => (
          <Car data={car} />
        ))}
      </div>
    </div>
  );
};
