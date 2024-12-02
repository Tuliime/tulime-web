import { useAgroTabStore } from "~/store/agroTab";
import { useSearchParams } from "@remix-run/react";
import { getKeyedPrefetchLinks } from "@remix-run/react/dist/links";

export const AgroTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const activeTab = useAgroTabStore((state) => state.activeTab);
  const params = searchParams.get("category");
  const activeTab = params ? searchParams.get("category") : "crops";
  const setActiveTab = useAgroTabStore((state) => state.setActiveTab);
  console.log("Get search params", searchParams.get("category"));

  const clickHandler = (
    tabName: "livestock" | "poultry" | "fish" | "crops"
  ) => {
    setActiveTab(tabName);

    const params = new URLSearchParams(searchParams);
    params.set("category", tabName);
    setSearchParams(params, {
      preventScrollReset: true,
    });
  };
  return (
    <div className="flex mt-20 px-2 justify-center items-centerw-full">
      <div className="flex-between w-[94%] sm:w-[90%]">
        <p className="sm:hidden md:block">Agro Products</p>
        <div className="flex sm:gap-4 md:gap-4 justify-center items-center">
          <span
            className={`agrotab ${activeTab === "crops" && "active-agrotab"}`}
            onClick={() => clickHandler("crops")}
          >
            Crops
          </span>
          <span
            className={`agrotab ${
              activeTab === "livestock" && "active-agrotab"
            }`}
            onClick={() => clickHandler("livestock")}
          >
            Livestock
          </span>
          <span
            className={`agrotab ${activeTab === "fish" && "active-agrotab"}`}
            onClick={() => clickHandler("fish")}
          >
            Fish
          </span>
          <span
            className={`agrotab ${activeTab === "poultry" && "active-agrotab"}`}
            onClick={() => clickHandler("poultry")}
          >
            Poultry
          </span>
        </div>
      </div>
    </div>
  );
};
