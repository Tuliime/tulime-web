import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/shared/layout/Footer";
import { MainContent } from "~/components/shared/layout/MainContent";
import { News } from "~/components/shared/layout/News";
import { SideBar } from "~/components/shared/layout/SideBar";
import { AppLayout } from "~/components/shared/layout/AppLayout";
import { MobileSideBar } from "~/components/shared/layout/MobileSideBar";

// https://tulime.netlify.app/

export const meta: MetaFunction = () => {
  return [
    { title: "TULIIME" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    // <div className="flex h-screen items-center justify-center">
    // <div className="w-full flex flex-col min-h-screen">
    //   <div className=" w-full md:flex md:gap-4 xl:px-20 lg:px-16 md:px-8 sm:px-8 mb-10 ">
    //     <SideBar />
    //     <News />
    //   </div>
    //   <MainContent />
    //   <Footer />
    // </div>
    <AppLayout>
      <div className="w-full flex flex-col min-h-screen">
        <div
          className="w-full md:flex md:gap-4 xl:px-20 lg:px-16
          md:px-8 sm:px-8 mb-10"
        >
          <SideBar />
          <News />
        </div>
        <MainContent />
        <Footer />
      </div>
    </AppLayout>
  );
}
