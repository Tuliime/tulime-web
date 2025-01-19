import { Product } from "../UI/Product";
import { getFishProducts } from "~/API/fish";

export const Fish = () => {
  const data = getFishProducts();
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8">
      {data.map((product, index) => (
        <Product
          key={index}
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
