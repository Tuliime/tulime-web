import { VetComponent } from "../UI/VetComponent";
import { getVerifiedVetDoctors } from "~/API/vetDoctor";

export const VetDoctors = () => {
  const data = getVerifiedVetDoctors();

  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-8 mb-8 w-[100%]">
      {data.map((product) => (
        <VetComponent
          key={product.id}
          name={product.name}
          gender={product.gender}
          verified={product.verified}
          image={product.image}
        />
      ))}
    </div>
  );
};
