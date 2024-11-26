import React from "react";
import { AgroSectionHome } from "~/components/agro/layout/AgroSectionHome";
import { agroProducts } from "~/data/agroProducts";

const Agroproducts = () => {
  return (
    <div className=" w-full">
      <AgroSectionHome />
    </div>
  );
};

export default Agroproducts;

export const loader = () => {
  const data = agroProducts;
  return data;
};
