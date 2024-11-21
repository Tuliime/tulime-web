import React, { ReactNode } from "react";
interface SeeMoreProps {
  children: ReactNode;
  className: string;
}
export const SeeMore: React.FC<SeeMoreProps> = ({ children, className }) => {
  return (
    <div className={`${className} flex-between`}>
      <p>{children}</p>
      <p>See All</p>
    </div>
  );
};
