import React from "react";
import { AgroSectionHome } from "~/components/agro/layout/AgroSectionHome";
import { agroProducts } from "~/data/agroProducts";
import { AppLayout } from "~/components/shared/layout/AppLayout";

const Agroproducts = () => {
  return (
    <AppLayout>
      <div className=" w-full">
        <AgroSectionHome />
      </div>
    </AppLayout>
  );
};

export default Agroproducts;

export const loader = () => {
  const data = agroProducts;
  return data;
};
