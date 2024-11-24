import React from "react";
import { HiHeart } from "react-icons/hi";
// import { heart } from "../../../constants/icons/heart";
import heart from "../../../constants/icons";
import { Product } from "../UI/Product";
import { livestockProducts } from "../../../data/livestockProducts";

export const Livestock = () => {
  return (
    <div className=" flex flex-wrap gap-3 mt-8 px-12 mb-8">
      {/* <p>Crops</p>
      <img src="/icons/heart.png" alt="" /> */}
      {livestockProducts.map((product) => (
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
