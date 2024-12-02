// import { ClipLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
// import ClipLoader from "react-spinners";
import { Product } from "../UI/Product";
import { json } from "@remix-run/node";
import { getCropProducts } from "~/API/crops";
import { useLoaderData } from "@remix-run/react";

// export const loader = async () => {
//   const data = await getCropProducts();
//   return json(data);
// };

export const Crops = () => {
  console.log("Crops data", getCropProducts());
  const data = getCropProducts();
  // const data = useLoaderData<typeof loader>();
  // const hasValidData =
  //   data &&
  //   data.length > 0 &&
  //   data.every((product) => product.image && product.image.length > 0);

  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8 w-[100%]">
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
