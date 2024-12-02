import { useSearchParams } from "@remix-run/react";
import { getKeyedPrefetchLinks } from "@remix-run/react/dist/links";
import { usefarmInputsTabStore } from "~/store/farmInputsTab";

export const FarmInputsTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const activeTab = useAgroTabStore((state) => state.activeTab);
  const params = searchParams.get("category");
  const activeTab = params ? searchParams.get("category") : "seeds";
  const setActiveTab = usefarmInputsTabStore((state) => state.setActiveTab);
  console.log("Get search params", searchParams.get("category"));
  // https://www.alibaba.com/countrysearch/CN/offer-chemicals-pesticides.html
  // Agricultural Chemical Pesticides Technical Grade 90%Tc 10%Gr Fosthiazate

  const clickHandler = (
    tabName: "seeds" | "fertilizers" | "pesticides" | "equipment"
  ) => {
    setActiveTab(tabName);

    const params = new URLSearchParams(searchParams);
    params.set("category", tabName);
    setSearchParams(params, {
      preventScrollReset: true,
    });
  };
  return (
    <div className="flex mt-20 px-2 justify-center items-center">
      <div className="flex-between md:w-[94%] sm:w-[90%]">
        <p className="sm:hidden md:block">Farm Inputs</p>
        <div className="flex sm:gap-4 md:gap-4 justify-center items-center">
          <span
            className={`agrotab ${activeTab === "seeds" && "active-agrotab"}`}
            onClick={() => clickHandler("seeds")}
          >
            Seeds
          </span>
          <span
            className={`agrotab ${
              activeTab === "fertilizers" && "active-agrotab"
            }`}
            onClick={() => clickHandler("fertilizers")}
          >
            Fertilizers
          </span>
          <span
            className={`agrotab ${
              activeTab === "pesticides" && "active-agrotab"
            }`}
            onClick={() => clickHandler("pesticides")}
          >
            Pesticides
          </span>
          <span
            className={`agrotab ${
              activeTab === "equipment" && "active-agrotab"
            }`}
            onClick={() => clickHandler("equipment")}
          >
            Equipment
          </span>
        </div>
      </div>
    </div>
  );
};
