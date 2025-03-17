import React from "react";

const Button = ({ className, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition";
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-100",
    link: "text-blue-600 hover:underline",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant] || ""} ${className}`}
      {...props}
    />
  );
};

export { Button };
