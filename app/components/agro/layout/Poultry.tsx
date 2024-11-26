import React from "react";
import { HiHeart } from "react-icons/hi";
// import { heart } from "../../../constants/icons/heart";
import heart from "../../../constants/icons";
import { Product } from "../UI/Product";
import { poultryProducts } from "../../../data/poultryProducts";

export const Poultry = () => {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8">
      {/* <p>Crops</p>
      <img src="/icons/heart.png" alt="" /> */}
      {poultryProducts.map((product, index) => (
        <Product
          key={index}
          // id={product.id}
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
