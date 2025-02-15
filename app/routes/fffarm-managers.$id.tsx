import { useLoaderData, useParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import { AppLayout } from "~/components/shared/layout/AppLayout";
import { farmMangers } from "~/data/farmManagers";

const FarmerDetails = () => {
  const farmer = useLoaderData<typeof loader>();
  // const params = useParams();
  // console.log("Farmer page Params:", params);
  // const farmer = farmMangers.find((farmer) => farmer.id === params.id);
  // console.log("Farmer:", farmer);

  if (!farmer) {
    return <div>Product Not Found</div>;
  }

  return (
    <AppLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">{farmer.name}</h1>
        <img src={farmer.image} alt={farmer.name} className="mb-4 max-w-full" />
        <p>Gender: {farmer.gender}</p>
      </div>
    </AppLayout>
  );
};

export default FarmerDetails;

export const loader = async ({ params }: { params: { id: string } }) => {
  const farmer = farmMangers.find((farmer) => farmer.id === params.id);
  // const farmer = farmMangers.find((farmer) => farmer.id === params.farmerId);
  console.log("Params in loader:", params);
  if (!farmer) {
    throw new Response("Farmer Not Found", { status: 404 });
  }
  console.log("Farmer in loader:", farmer);
  return json(farmer);
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <AppLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>{error.message}</p>
      </div>
    </AppLayout>
  );
}
