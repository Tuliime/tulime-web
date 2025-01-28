import { VetDoctors } from "~/components/farm-mangers/layout/VetDoctors";
import { AppLayout } from "~/components/shared/layout/AppLayout";

const VeterinaryDoctors = () => {
  return (
    <AppLayout>
      <div className="lg:px-12 md:px-8 sm:px-6">
        <p>Veterinary workers & Farm managers</p>
        <p>Veterinary workers</p>
      </div>
      <VetDoctors />
    </AppLayout>
  );
};

export default VeterinaryDoctors;
