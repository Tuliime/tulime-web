import React from "react";
import { Crops } from "~/components/agro/layout/Crops";
import { crop } from "~/constants";
import { getCropProducts } from "~/API/crops";
import { ExploreMore } from "../UI/ExploreMore";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// export async function loader({}: LoaderFunctionArgs) {
//   const url = fetch("", { headers: { accept: "application/json" } });
//   return json((await url).json());
// }

export const MainContent = () => {
  // const newData = useLoaderData();
  // console.log("new Data", newData);
  const data = getCropProducts();

  return (
    <div
      // className="mb-10 mt-20 lg:px-16 px md:px-12 sm:px-12"
      className="w-full xl:px-20 lg:px-16
    md:px-8 sm:px-8 mb-10"
    >
      <ExploreMore link="/agroproducts">
        <p>Agro Products</p>
      </ExploreMore>
      <div
        className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
        mb-10 mt-10 "
      >
        {data.map((product, index) => (
          <>
            <div
              className="bg-white shadow-md w-[100%] h-70 rounded-lg"
              key={index}
            >
              <img src={product.image} alt="" className=" aspect-[4/3]" />
              <div className=" py-1 px-2 text-sm">
                <p className=" text-gray-700">{product.name}</p>
                <p className=" text-green-100 font-medium">
                  {product.currency} {product.price}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
