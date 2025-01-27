import { Link } from "@remix-run/react";
import React from "react";
import { useProfileDropDownStore } from "~/store/profileDropDown";
import { useAuthUserStore } from "~/store/auth";

export const Profile = () => {
  const toggleDropDown = useProfileDropDownStore((state) => state.setDropDown);
  const userName = useAuthUserStore((state) => state.user?.name)!;
  const logOut = useAuthUserStore((state) => state.logOutUser);

  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 text-zinc-800 z-50 top-11"
      onMouseLeave={toggleDropDown}
    >
      <div className="px-4 py-2 border-b border-gray-200">
        <p className="font-semibold text-sm">Hello, {userName}</p>
      </div>
      <div className="py-1">
        <Link
          to="/"
          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20c0-2.21 3.582-4 8-4s8 1.79 8 4v2H4v-2z" />
          </svg>
          Manage Account
        </Link>
        <button
          onClick={logOut}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M16 13v-2H7v-3H4v8h3v-3h9z" />
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  );
};
