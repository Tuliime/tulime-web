import React from "react";
import { useAgroTabStore } from "~/store/agroTab";

export const AgroTab = () => {
  const activeTab = useAgroTabStore((state) => state.activeTab);
  const setActiveTab = useAgroTabStore((state) => state.setActiveTab);

  return (
    <div className="flex mt-20 px-8 justify-center items-center">
      <div className=" flex-between w-[94%] sm:w-[70%]">
        <p>Agro</p>
        <div className="flex gap-3 sm:gap-8 justify-center items-center">
          <span
            className={` px-2 sm:px-3 py-1 cursor-pointer ${
              activeTab === "crops" && "active-agrotab"
            }`}
            onClick={() => setActiveTab("crops")}
          >
            Crops
          </span>
          <span
            className={`px-2 sm:px-3 py-1 cursor-pointer ${
              activeTab === "livestock" && "active-agrotab"
            }`}
            onClick={() => setActiveTab("livestock")}
          >
            Livestock
          </span>
          <span
            className={`px-2 sm:px-3 py-1 cursor-pointer ${
              activeTab === "fish" && "active-agrotab"
            }`}
            onClick={() => setActiveTab("fish")}
          >
            Fish
          </span>
          <span
            className={`px-2 sm:px-3 py-1 cursor-pointer ${
              activeTab === "poultry" && "active-agrotab"
            }`}
            onClick={() => setActiveTab("poultry")}
          >
            Poultry
          </span>
        </div>
      </div>
    </div>
  );
};
