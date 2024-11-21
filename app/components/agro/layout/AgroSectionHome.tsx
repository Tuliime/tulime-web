import React from "react";
import { Button } from "~/components/shared/UI/Button";

export const AgroSectionHome: React.FC = () => {
  return (
    <div className="flex mt-20 px-8 justify-center items-center">
      <div className=" flex-between w-[94%] sm:w-[70%]">
        <p>Agroproducts</p>
        <div className="flex gap-3 sm:gap-8 justify-center items-center">
          <span className=" border-solid border-2 border-green-100 rounded-lg px-3 py-1 cursor-pointer">
            Crops
          </span>
          <span className=" cursor-pointer">Livestock</span>
          <span className="cursor-pointer">Fish</span>
          <span className=" cursor-pointer">Poultry</span>
        </div>
      </div>
    </div>
  );
};
