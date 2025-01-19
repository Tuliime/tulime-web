import { InputProduct } from "../UI/InputProduct";
import { getEquipmentProducts } from "~/API/equipment";

export const Equipment = () => {
  console.log("Crops data", getEquipmentProducts());
  const data = getEquipmentProducts();

  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8 w-[100%]">
      {data.map((product) => (
        <InputProduct
          key={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          currency={product.currency}
          image={product.image}
        />
      ))}
    </div>
  );
};
