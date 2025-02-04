// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Link } from "@remix-run/react";
import { useSidebarStore } from "~/store/sidebar";
import { useAuthUserStore } from "~/store/auth";
import { useNavigate } from "@remix-run/react";
import { getUserInitial } from "~/utils/getUserInitial";
import { useProfileDropDownStore } from "~/store/profileDropDown";
import { Profile } from "../UI/Profile";

export const LoggedInHeader = () => {
  const isSideBarOpen = useSidebarStore((state) => state.isOpen);
  const openSideBar = useSidebarStore((state) => state.openSidebar);
  const closeSideBar = useSidebarStore((state) => state.closeSidebar);
  const isLoggedInStatus = useAuthUserStore((state) => state.isLoggedIn);

  const toggleDropDown = useProfileDropDownStore((state) => state.setDropDown);

  const isDropDownActive = useProfileDropDownStore(
    (state) => state.isDropDownActive
  );
  const logOut = useAuthUserStore((state) => state.logOutUser);
  const userName = useAuthUserStore((state) => state.user?.name)!;
  const navigate = useNavigate();
  const logOutHandler = () => {
    logOut();
    navigate("/");
  };

  return (
    // <div className=" bg-lime-700  text-neutral-50 py-3 px-6 flex-between mb-4">
    <div
      className="bg-green-100 text-neutral-50 py-3 md:px-4  
       sm:px-2 flex-between"
    >
      <span className=" cursor-pointer">
        <Link to="/" className=" md:block sm:hidden">
          Tulime
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
      <form className=" relative">
        <input
          type="text"
          placeholder="Search Tuliime"
          className="rounded-md px-4 py-2  text-zinc-700 outline-none
           text-sm placeholder:text-gray-500"
        />
        <span className=" absolute top-[0.7rem] right-3 text-gray-500">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
          </svg>
        </span>
      </form>
      <div className="flex items-center gap-4 cursor-pointer">
        <span>
          en
          {/* <DropdownMenu /> */}
        </span>
        <div className="  ">
          <span
            className=" bg-purple-500 px-3 py-2 w-4 h-4 rounded-[50%]  text-sm"
            onClick={toggleDropDown}
          >
            {getUserInitial(userName)}
          </span>
          {isDropDownActive && <Profile />}
        </div>
      </div>
    </div>
  );
};
