import { ReactNode } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <div className="w-full">
      <header className="fixed w-full top-0">
        <Header />
      </header>
      {/* <SideBar/> */}
      <main className="mt-20 w-full">{props.children}</main>
    </div>
  );
};
