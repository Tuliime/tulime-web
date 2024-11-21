import { Link } from "@remix-run/react";
import React from "react";

export const Header = () => {
  return (
    // <div className=" bg-lime-700  text-neutral-50 py-3 px-6 flex-between mb-4">
    <div className=" bg-green-100 text-neutral-50 py-3 px-6 flex-between mb-4 fixed w-full top-0">
      <span className=" cursor-pointer">
        <Link to="/">TULIIME</Link>
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
