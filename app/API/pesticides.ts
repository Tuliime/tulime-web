import { farmInputProducts } from "~/data/farmInputProducts";
export const getPesticidesProducts = () => {
  {
    return farmInputProducts.filter((product) => {
      return product.category === "pesticides";
    });
  }
};
