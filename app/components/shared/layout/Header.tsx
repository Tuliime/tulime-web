import { Link } from "@remix-run/react";
import React from "react";
import { useSidebarStore } from "~/store/sidebar";

export const Header = () => {
  const isSideBarOpen = useSidebarStore((state) => state.isOpen);
  const openSideBar = useSidebarStore((state) => state.openSidebar);
  const closeSideBar = useSidebarStore((state) => state.closeSidebar);
  console.log("IS SIDE BAR OPEN", isSideBarOpen);
  return (
    // <div className=" bg-lime-700  text-neutral-50 py-3 px-6 flex-between mb-4">
    <div className=" bg-green-100 text-neutral-50 py-3 md:px-6 sm:px-2 flex-between mb-4 fixed w-full top-0">
      <span className=" cursor-pointer">
        <Link to="/" className=" md:block sm:hidden">
          TULIIME
        </Link>
      </span>
      <span className="md:hidden sm:block cursor-pointer" onClick={openSideBar}>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1.8em"
          width="1.8em"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </span>
      <form>
        <input
          type="text"
          placeholder="Search Tuliime"
          className="rounded-md px-2 placeholder:text-stone-400 text-zinc-700 outline-none"
        />
      </form>
      <div className="flex gap-4">
        <span>EN</span>
        <span>SIGN IN</span>
      </div>
    </div>
  );
};
