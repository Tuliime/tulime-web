// import { Farmers } from "~/components/farm-mangers/layout/Farmers";
// import { AppLayout } from "~/components/shared/layout/AppLayout";

// const FarmManagers = () => {
//   return (
//     <AppLayout>
//       <div className="lg:px-12 md:px-8 sm:px-6">
//         <p>Farm managers</p>
//       </div>
//       <Farmers />
//     </AppLayout>
//   );
// };

// export default FarmManagers;

import { useLoaderData, useParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import { AppLayout } from "~/components/shared/layout/AppLayout";
import { farmMangers } from "~/data/farmManagers";
import { toSentenceCase } from "~/utils/toSentenceCase";
import { PenIcon } from "~/components/shared/UI/PenIcon";

const FarmerDetails = () => {
  // const farmer = useLoaderData<typeof loader>();
  // const params = useParams();
  const farmer = farmMangers.find((farmer) => farmer.id === "6");
  // console.log("Params:", params);

  if (!farmer) {
    return <div>Product Not Found</div>;
  }

  return (
    <AppLayout>
      <div className="lg:px-12 md:px-8 sm:px-6">
        <p className=" text-gray-700 text-[0.9rem]">
          Veterinary Worker Profile
        </p>
        <div className="flex gap-5 mt-8">
          <div className="bg-white shadow-md w-[35%] max-h-52 rounded-lg text-[0.78rem] flex justify-center items-center px-3 py-3 gap-6">
            <div className="  flex justify-center items-center pt-4">
              <img
                src={farmer.image}
                alt={farmer.name}
                className="mb-4 w-40 h-40 aspect-[4/3] rounded-[50%] object-cover object-center"
              />
            </div>
            <div className=" flex flex-col gap-2 text-gray-800 ">
              {" "}
              {farmer.verified && (
                <div className="flex items-center gap-2  font-medium rounded-lg">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                    width="1em"
                    height="1em"
                    className="text-green-100 font-extrabold"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
                    ></path>
                  </svg>
                  <p className=" text-gray-700">Verified</p>
                </div>
              )}
              <p>{farmer.liceNumber}</p>
              <p>
                <b>{farmer.name}</b>
              </p>
              <p>{toSentenceCase(farmer.gender)}</p>
              <p>{farmer.telNumber}</p>
            </div>
          </div>
          <div className="bg-white shadow-md w-[75%] px-4 py-6 flex flex-col gap-4 rounded-lg">
            <p className=" text-gray-700 text-[0.84rem]">Basic Information</p>
            <div className=" flex gap-4 text-[0.78rem] text-gray-700 w-[100%]">
              <div className=" flex flex-col gap-6 w-[50%]">
                <div className=" flex flex-col gap-1">
                  <div className=" flex gap-5 items-center">
                    <p>Name</p>
                    <PenIcon />
                  </div>
                  <p className=" px-1 py-1 border-[1.5px] border-gray-400 rounded-md w-[100%] font-semibold">
                    {farmer.name}
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <div className=" flex gap-5 items-center">
                    <p>License Number</p>
                    <PenIcon />
                  </div>
                  <p className=" px-1 py-1 border-[1.5px] border-gray-400 rounded-md w-[100%] font-semibold">
                    {farmer.liceNumber}
                  </p>
                </div>
                <div className=" flex flex-col gap-2">
                  <p>Joined</p>
                  <p className=" font-semibold">{farmer.joined}</p>
                </div>
              </div>
              <div className="flex flex-col gap-6 w-[50%]">
                <div className=" flex flex-col gap-1">
                  <div className=" flex gap-5 items-center">
                    <p>Email</p>
                    <PenIcon />
                  </div>
                  <p className=" px-1 py-1 border-[1.5px] border-gray-400 rounded-md w-[100%] font-semibold">
                    {farmer.email}
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <div className=" flex gap-5 items-center">
                    <p>Tel Number</p>
                    <PenIcon />
                  </div>
                  <p className=" px-1 py-1 border-[1.5px] border-gray-400 rounded-md w-[100%] font-semibold">
                    {farmer.telNumber}
                  </p>
                </div>
                <div className=" flex flex-col gap-2">
                  <p>Updated</p>
                  <p className=" font-semibold">{farmer.updated}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FarmerDetails;

// export const loader = async ({ params }: { params: { id: string } }) => {
//   const farmer = farmMangers.find((farmer) => farmer.id === params.id);

//   console.log("Params:", params);
//   if (!farmer) {
//     throw new Response("Farmer Not Found", { status: 404 });
//   }
//   console.log("Farmer:", farmer);
//   return json(farmer);
// };

// export function ErrorBoundary({ error }: { error: Error }) {
//   return (
//     <AppLayout>
//       <div>
//         <h1 className="text-2xl font-bold mb-4">Error</h1>
//         <p>{error.message}</p>
//       </div>
//     </AppLayout>
//   );
// }
