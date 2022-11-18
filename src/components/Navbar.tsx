import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logo, logo1, logo2, logo3 } from "../utils/constants";

import {
  Logo,
  SearchBar,
  IconLess,
  IconGreat,
  SearchIcon,
} from "../components";

export const Stack = styled.div`
  border: 1px dashed red;
  display: flex;
  align-items: flex-center;
  padding: 1rem;

  .tex {
    color: #fff;
  }

  @media (min-width: 320px) {
    display: flex;
    // justify-content: space-between;
    position: sticky;
    background: #000;
    top: 0;
  }
`;

function Navbar() {
  return (
    <Stack>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Logo name={logo} />
      </Link>
      <div>
        <h3 className="tex">Hey! Aleem</h3>
      </div>
      <IconLess name={logo1} />
      <IconGreat name={logo2} />
      <SearchBar />
      <SearchIcon name={logo3} />
    </Stack>
  );
}

export default Navbar;
