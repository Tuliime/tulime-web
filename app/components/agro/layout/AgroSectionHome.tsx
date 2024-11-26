import React from "react";
import { AgroTab } from "~/components/shared/layout/AgroTab";
import { useAgroTabStore } from "~/store/agroTab";
import { Crops } from "./Crops";
import { Fish } from "./Fish";
import { Livestock } from "./Livestock";
import { Poultry } from "./Poultry";

export const AgroSectionHome: React.FC = () => {
  const activeTab = useAgroTabStore((state) => state.activeTab);

  return (
    <>
      <AgroTab />
      <div className=" lg:px-12 md:px-8 sm:px-6">
        {activeTab === "crops" && <Crops />}
        {activeTab === "fish" && <Fish />}
        {activeTab === "livestock" && <Livestock />}
        {activeTab === "poultry" && <Poultry />}
      </div>
    </>
  );
};
