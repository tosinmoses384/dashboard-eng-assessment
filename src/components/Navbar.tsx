import { Link } from "react-router-dom";
import styled from "styled-components";
import { logo, logo1, logo2, logo3 } from "../utils/constants";
import { Logo } from "../components";

export const Stack = styled.div`
  display: flex;
  align-items: flex-center;
  padding: 1rem;

  .hideDiv {
    @media (min-width: 320px) {
      display: none;
    }

    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      width: 20%;
    }
  }

  .tex {
    color: #fff;
  }

  @media (min-width: 320px) {
    display: flex;
    position: sticky;
    z-index: 1000;
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
          marginRight: "1rem",
        }}
      >
        <Logo name={logo} height={"40px"} width={"40px"} />
      </Link>

      <div className="hideDiv">
        <h3 className="tex">Hey! Aleem</h3>

        <Logo name={logo1} width="15px" height="26px" />
        <Logo name={logo2} width="15px" height="26px" />
        <Logo name={logo3} width="18px" height="18px" />
      </div>
    </Stack>
  );
}

export default Navbar;
