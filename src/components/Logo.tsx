import React from "react";

const Logo = ({ name }: { name: string }) => {
  return <img src={`./svg/${name}.svg`} alt="logo" style={{
    height: '40px',
    width: '40px'

  }} />;
};

export default Logo;
