import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/shared/layout/Footer";
import { MainContent } from "~/components/shared/layout/MainContent";
import { News } from "~/components/shared/layout/News";
import { SideBar } from "~/components/shared/layout/SideBar";
import { AppLayout } from "~/components/shared/layout/AppLayout";
import { MobileSideBar } from "~/components/shared/layout/MobileSideBar";
import { Chat } from "~/components/shared/UI/Chat";
import { useState } from "react";

// https://tulime.netlify.app/

export const meta: MetaFunction = () => {
  return [
    { title: "TULIIME" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [showChatBot, setShowChatBot] = useState<boolean>(false);

  const handleShowChatBot = () => {
    setShowChatBot((prev) => !prev);
  };
  return (
    <AppLayout>
      {/* <Chat /> */}
      <div className="w-full flex flex-col min-h-screen">
        <div
          className="w-full md:flex md:gap-4 xl:px-20 lg:px-16
          md:px-8 sm:px-8 mb-10"
        >
          <SideBar />
          <News />
        </div>
        {showChatBot && <Chat />}
        <div
          className=" bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center fixed right-6 bottom-12 cursor-pointer"
          onClick={handleShowChatBot}
        >
          {!showChatBot ? (
            "🤖"
          ) : (
            <span className=" cursor-pointer">
              <svg fill="none" viewBox="0 0 24 24" height="1.2em" width="1.2em">
                <path
                  fill="currentColor"
                  d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                />
              </svg>
            </span>
          )}
        </div>
        <MainContent />
        <Footer />
      </div>
    </AppLayout>
  );
}
