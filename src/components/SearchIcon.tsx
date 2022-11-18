import React from "react";

const SearchIcon = ({ name }: { name: string }) => {
  return <img src={`./svg/${name}.svg`} alt="logo" height={45} />;
};

export default SearchIcon;
