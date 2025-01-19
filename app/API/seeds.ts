import { farmInputProducts } from "~/data/farmInputProducts";
export const getSeedProducts = () => {
  {
    return farmInputProducts.filter((product) => {
      return product.category === "seeds";
    });
  }
};
