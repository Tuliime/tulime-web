import React from "react";

interface IconProps {
  className?: string;
  onClick?: () => void;
}

export const ArrowIcon = ({ className, onClick }: IconProps) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className={className}
        onClick={onClick}
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8L5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  );
};
