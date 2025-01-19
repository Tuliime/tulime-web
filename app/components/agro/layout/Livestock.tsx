import heart from "../../../constants/icons";
import { Product } from "../UI/Product";
import { getLivestockProducts } from "~/API/livestock";

export const Livestock = () => {
  const data = getLivestockProducts();
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
