import { useParams } from "@remix-run/react";
import React from "react";

const TestDetailsPage = () => {
  const params = useParams();
  console.log("Test Params", params);
  return <div> TestDetailsPage</div>;
};

export default TestDetailsPage;
