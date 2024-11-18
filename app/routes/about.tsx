import React from "react";
import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  // API call to go backend
  return { name: "About" };
};

const About: React.FC = () => {
  const data: { name: string } = useLoaderData();

  console.log("data: ", data);

  return <div>{data.name}</div>;
  // return <div>About</div>;
};

export default About;
