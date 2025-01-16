import React, { ReactNode } from "react";
import { ArrowIcon } from "../layout/ArrowIcon";
import { Link } from "@remix-run/react";

interface SeeMoreProps {
  children: ReactNode;
  className?: string;
  link: string;
}
export const ExploreMore: React.FC<SeeMoreProps> = ({
  children,
  className,
  link,
}) => {
  return (
    <div className={`${className} flex-between mt-10`}>
      <p className="text-sm">{children}</p>
      <Link
        to={link}
        className=" text-sm text-blue-100 flex justify-center items-center gap-4"
      >
        <span>Explore more</span> <ArrowIcon />
      </Link>
    </div>
  );
};
