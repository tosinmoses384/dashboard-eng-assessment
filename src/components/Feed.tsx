import styled from "styled-components";
import { Music, Sidebar, LogoFlex } from "../components";

export const Stack = styled.div`
  position: relative;
  display: flex;

  .box {
    border-right: 1px solid #3d3d3d;
    min-width: 13%;

    @media (min-width: 320px) {
      display: none;
    }

    @media (min-width: 768px) {
      display: block;
      height: 92vh;
      padding-left: 2px;
      padding-right: 2px;
    }
  }

  .sec {
    min-width: 85%;

    .header {
      height: 250px;
      background: url(./svg/headbg.svg) no-repeat center center / cover;
      margin-bottom: 2.5rem;
    }

    .main {
      height: 92vh;
      padding-left: 1rem;

      .welcome {
        display: flex;
        justify-content: space-between;

        // margin-bottom: 2.5rem;

        .welcome_h1 {
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 34px;
          letter-spacing: 0.04em;
          color: #ffffff;
        }
        .welcome_h6 {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.04em;
          color: rgba(217, 217, 217, 0.9);
          align-self: end;
          padding-right: 0.5rem;
          @media (min-width: 768px) {
            display: none;
          }
        }
      }

      @media (min-width: 320px) {
       height: 120vh;
      }
      @media (min-width: 768px) {
        height: 57vh;
      }

    }
  }

  @media (min-width: 320px) {
    // border: 1px dahsed red!important;
    display: flex;
    flex-direction: flex-column;

    min-width: 22rem;
    background: #000;

    // height: 58rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Feed = () => {
  return (
    <>
      <Stack>
        <div className="box">
          <Sidebar />
        </div>
        <section className="sec">
          <div className="header"></div>

          <div className="main">
            <div className="welcome">
              <h1 className="welcome_h1">Welcome Back!</h1>
              <h6 className="welcome_h6">See more</h6>
            </div>
            <Music />
          </div>
        </section>

        <div
          className="container-abs"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            // top: "1053px",
            // top: "1276px",
            // top: "1544px",
            top: "1297px",
            bottom: "0px",
            background: "black",
            width: "100%",
            height: "4rem",
          }}
        >
          <LogoFlex name="home" top="0px" left="0px" />
          <LogoFlex name="discover" top="0px" left="0px" />
          <LogoFlex name="library" top="0px" left="0px" />
          <LogoFlex name="playlist" top="0px" left="0px" />
        </div>
      </Stack>
    </>
  );
};

export default Feed;
