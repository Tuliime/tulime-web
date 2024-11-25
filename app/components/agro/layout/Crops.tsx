import React from "react";
import { HiHeart } from "react-icons/hi";
// import { heart } from "../../../constants/icons/heart";
import heart from "../../../constants/icons";
import { Product } from "../UI/Product";
import { agroProducts } from "../../../data/agroProducts";

export const Crops = () => {
  return (
    // <div className=" flex flex-wrap gap-3 mt-8 mb-8 bg-lime-700">
    <div className=" grid grid-cols-4 gap-3 mt-8 mb-8">
      {/* <p>Crops</p>
      <img src="/icons/heart.png" alt="" /> */}
      {agroProducts.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          currency={product.currency}
          image={product.image}
        />
      ))}
      {/* <img src={heart} alt="" /> */}
    </div>
  );
};
