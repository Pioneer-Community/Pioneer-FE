import React from "react";

type IconProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

const Icon = ({ icon, onClick }: IconProps) => {
  return (
    <div className="w-7 h-7" onClick={onClick}>
      {icon}
    </div>
  );
};

export default Icon;
