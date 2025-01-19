import React from "react";
import { FarmInputsHome } from "~/components/farm-inputs/layout/FarmInputsHome";
import { AppLayout } from "~/components/shared/layout/AppLayout";

const FarmInputs = () => {
  return (
    <AppLayout>
      <div className=" w-full">
        <FarmInputsHome />
      </div>
    </AppLayout>
  );
};

export default FarmInputs;
