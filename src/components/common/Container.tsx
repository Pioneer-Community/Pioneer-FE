import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return <main className="max-w-5xl mx-auto">{children}</main>;
};

export default Container;
