import { Link } from "react-router-dom";
import styled from "styled-components";
import { logo, logo1, logo2, logo3 } from "../utils/constants";

import { Logo, SearchBar } from "../components";

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
    position: sticky;
    background: #000;
    top: 0;

    min-width: 22rem;
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
        <Logo name={logo} height={"40px"} width={"40px"} />
      </Link>
      <div>
        <h3 className="tex">Hey! Aleem</h3>
      </div>
      <Logo name={logo1} />
      <Logo name={logo2} />
      <SearchBar />
      <Logo name={logo3} />
    </Stack>
  );
}

export default Navbar;
