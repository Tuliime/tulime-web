import { agroProducts } from "~/data/agroProducts";
export const getLivestockProducts = () => {
  {
    return agroProducts.filter((product) => {
      return product.category === "livestock";
    });
  }
};
