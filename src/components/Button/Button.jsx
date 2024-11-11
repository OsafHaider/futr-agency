import React from "react";

export const Button = ({
  children,
  onClick,
  className,
  type = "button",
  loading,
  textWhileLoading = "Loading...",
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {loading ? textWhileLoading : children}
    </button>
  );
};

