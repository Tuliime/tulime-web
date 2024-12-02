import { farmInputProducts } from "~/data/farmInputProducts";
export const getEquipmentProducts = () => {
  {
    return farmInputProducts.filter((product) => {
      return product.category === "equipment";
    });
  }
};
