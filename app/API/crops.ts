import { agroProducts } from "~/data/agroProducts";
export const getCropProducts = () => {
  {
    return agroProducts.filter((product) => {
      return product.category === "crop";
    });
  }
};
