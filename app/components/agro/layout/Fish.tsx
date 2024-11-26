// import React from "react";

// export const Fish = () => {
//   return <div>Fish</div>;
// };

import React from "react";
import { HiHeart } from "react-icons/hi";
import heart from "../../../constants/icons";
import { Product } from "../UI/Product";
import { fishProducts } from "../../../data/fishProducts";
// import { heart } from "../../../constants/icons/heart";

export const Fish = () => {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8">
      {/* <p>Crops</p>
      <img src="/icons/heart.png" alt="" /> */}
      {fishProducts.map((product, index) => (
        <Product
          key={index}
          // key={product.id}
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
