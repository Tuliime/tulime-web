import { Product } from "../UI/Product";
import { getCropProducts } from "~/API/crops";

export const Crops = () => {
  console.log("Crops data", getCropProducts());
  const data = getCropProducts();
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8">
      {data.map((product) => (
        <Product
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
