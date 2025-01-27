import { ReactNode } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { useAuthUserStore } from "~/store/auth";
import {
  Links,
  Meta,
  Scripts,
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import { LoggedInHeader } from "./LoggedInHeader";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const isLoggedInStatus = useAuthUserStore((state) => state.isLoggedIn);
  const logOut = useAuthUserStore((state) => state.logOutUser);
  const userName = useAuthUserStore((state) => state.user?.name);

  const navigate = useNavigate();
  const logOutHandler = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="w-full">
      <header className="fixed w-full top-0">
        {!isLoggedInStatus ? <Header /> : <LoggedInHeader />}
      </header>

      <main className=" mt-28 w-full">{props.children}</main>
    </div>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
