// import React from "react";

// export const FarmInputsHome = () => {
//   return <div>FarmInputsHome</div>;
// };

import React from "react";
import { useSearchParams } from "@remix-run/react";
import { Seeds } from "./Seeds";
import { Fertilizers } from "./Fertilizers";
import { Equipment } from "./Equipment";
import { Pesticides } from "./Pesticides";
import { FarmInputsTab } from "~/components/shared/layout/FarmInputsTab";

export const FarmInputsHome: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get("category");
  const activeTab = params ? searchParams.get("category") : "seeds";

  return (
    <>
      <FarmInputsTab />
      <div className=" lg:px-12 md:px-8 sm:px-6">
        {activeTab === "seeds" && <Seeds />}
        {activeTab === "fertilizers" && <Fertilizers />}
        {activeTab === "equipment" && <Equipment />}
        {activeTab === "pesticides" && <Pesticides />}
      </div>
    </>
  );
};
