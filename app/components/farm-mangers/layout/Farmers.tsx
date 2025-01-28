import { getVerifiedFarmManagers } from "~/API/farmManagers";
import { VetComponent } from "../UI/VetComponent";

export const Farmers = () => {
  const data = getVerifiedFarmManagers();

  return (
    <div className="lg:px-12 md:px-8 sm:px-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8 w-[100%]">
      {data.map((farmer) => (
        <VetComponent
          key={farmer.id}
          name={farmer.name}
          gender={farmer.gender}
          verified={farmer.verified}
          image={farmer.image}
        />
      ))}
    </div>
  );
};
