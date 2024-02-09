import React from "react";

const HomeContainer = ({ children }) => {
  return (
    <div className="flex h-full grow items-end justify-between">{children}</div>
  );
};

export default HomeContainer;
