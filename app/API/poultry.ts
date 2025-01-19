import { agroProducts } from "~/data/agroProducts";
export const getPoultryProducts = () => {
  {
    return agroProducts.filter((product) => {
      return product.category === "poultry";
    });
  }
};
