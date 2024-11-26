import React from "react";
import { useAgroTabStore } from "~/store/agroTab";

export const AgroTab = () => {
  const activeTab = useAgroTabStore((state) => state.activeTab);
  const setActiveTab = useAgroTabStore((state) => state.setActiveTab);

  return (
    <div className="flex mt-20 px-8 justify-center items-center">
      <div className=" flex-between w-[94%] sm:w-[90%]">
        <p className=" sm:hidden md:block">Agro</p>
        <div className="flex sm:gap-4 md:gap-8 justify-center items-center">
          {/* <span
            className={` px-2 sm:px-3 py-1 cursor-pointer bg-gray-500 rounded-[20px] text-gray-200 ${
              activeTab === "crops" && "active-agrotab"
            }`}
            onClick={() => setActiveTab("crops")}
          >
            Crops
          </span> */}
          <span
            className={`agrotab ${activeTab === "crops" && "active-agrotab"}`}
            onClick={() => setActiveTab("crops")}
          >
            Crops
          </span>
          <span
            className={`agrotab ${
              activeTab === "livestock" && "active-agrotab"
            }`}
            onClick={() => setActiveTab("livestock")}
          >
            Livestock
          </span>
          <span
            className={`agrotab ${activeTab === "fish" && "active-agrotab"}`}
            onClick={() => setActiveTab("fish")}
          >
            Fish
          </span>
          <span
            className={`agrotab ${activeTab === "poultry" && "active-agrotab"}`}
            onClick={() => setActiveTab("poultry")}
          >
            Poultry
          </span>
        </div>
      </div>
    </div>
  );
};
