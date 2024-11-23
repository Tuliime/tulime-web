import React from "react";
import { crop } from "~/constants";

interface ProductProps {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  className: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  name,
  category,
  price,
  currency,
  image,
  className,
}) => {
  return (
    <div className={`${className} bg-white shadow-md w-60 h-70 rounded-lg`}>
      <img src={image} alt="" className=" w-auto h-60" />
      <div className=" py-1 px-2">
        <p className=" text-gray-700">{name}</p>
        <p className=" text-green-100 font-medium">
          {currency} {price}
        </p>
      </div>
    </div>
  );
};
