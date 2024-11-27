import React from "react";
import { Crops } from "~/components/agro/layout/Crops";
import { crop } from "~/constants";
import { getCropProducts } from "~/API/crops";

export const MainContent = () => {
  const data = getCropProducts();

  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mb-10 mt-20 lg:px-16 px md:px-12 sm:px-12">
      {data.map((product) => (
        <>
          <div
            className="bg-white shadow-md w-[100%] h-70 rounded-lg"
            key={product.id}
          >
            <img src={product.image} alt="" className=" aspect-[4/3]" />
            <div className=" py-1 px-2">
              <p className=" text-gray-700">{product.name}</p>
              <p className=" text-green-100 font-medium">
                {product.currency} {product.price}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
