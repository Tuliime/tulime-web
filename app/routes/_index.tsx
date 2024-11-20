import type { MetaFunction } from "@remix-run/node";
import { MainContent } from "~/components/shared/layout/MainContent";
import { SideBar } from "~/components/shared/layout/SideBar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    // <div className="flex h-screen items-center justify-center">
    <div className="flex gap-10 px-20">
      <SideBar />
      <MainContent />
    </div>
  );
}
