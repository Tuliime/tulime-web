import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/shared/layout/Footer";
import { MainContent } from "~/components/shared/layout/MainContent";
import { News } from "~/components/shared/layout/News";
import { SideBar } from "~/components/shared/layout/SideBar";

export const meta: MetaFunction = () => {
  return [
    { title: "TULIIME" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    // <div className="flex h-screen items-center justify-center">
    <div className=" flex flex-col min-h-screen">
      <div className="flex gap-10 px-20 mb-10">
        <SideBar />
        <News />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}
