import { agroProducts } from "~/data/agroProducts";
export const getFishProducts = () => {
  {
    return agroProducts.filter((product) => {
      return product.category === "fish";
    });
  }
};
