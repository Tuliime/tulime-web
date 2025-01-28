import React from "react";
import { Farmers } from "~/components/farm-mangers/layout/Farmers";
import { AppLayout } from "~/components/shared/layout/AppLayout";

const FarmManagers = () => {
  return (
    <AppLayout>
      <div className="lg:px-12 md:px-8 sm:px-6">
        <p>Farm managers</p>
      </div>
      <Farmers />
    </AppLayout>
  );
};

export default FarmManagers;
