import React from "react";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent };
