import React from "react";

const IconGreat = ({ name }: { name: string }) => {
  return <img src={`./svg/${name}.svg`} alt="logo" height={45} />;
};

export default IconGreat;
