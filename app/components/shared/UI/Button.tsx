import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | undefined;
  variant?: "primary" | "secondary" | undefined;
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  type,
  className,
}) => {
  const variants = {
    primary: " bg-green-100 text-white px-3 py-2 rounded-lg",
    secondary: "bg-blue-100 text-white px-3 py-2 rounded-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${variant === "primary" && variants.primary} ${
        variant === "secondary" && variants.secondary
      } ${variant === undefined && variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};
