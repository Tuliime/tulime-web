import { farmInputProducts } from "~/data/farmInputProducts";
export const getFertilizerProducts = () => {
  {
    return farmInputProducts.filter((product) => {
      return product.category === "fertilizers";
    });
  }
};
