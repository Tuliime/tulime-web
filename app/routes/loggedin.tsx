import { useNavigate } from "@remix-run/react";
import { AppLayout } from "~/components/shared/layout/AppLayout";

import { useAuthUserStore } from "~/store/auth";

const Loggedin = () => {
  const isLoggedInStatus = useAuthUserStore((state) => state.isLoggedIn);
  const logOut = useAuthUserStore((state) => state.logOutUser);
  const userName = useAuthUserStore((state) => state.user?.name);
  const navigate = useNavigate();
  const logOutHandler = () => {
    logOut();
    navigate("/");
  };

  {
    return (
      isLoggedInStatus && (
        <AppLayout>
          <div className=" flex flex-col items-center ">
            <div>
              Congratulations {userName}. You are successfully logged in
            </div>
            <button
              onClick={logOutHandler}
              className=" border-0 bg-red-800 hover:bg-red-700 transition text-white py-1 px-2"
            >
              Log out
            </button>
          </div>
        </AppLayout>
      )
    );
  }
};

export default Loggedin;
