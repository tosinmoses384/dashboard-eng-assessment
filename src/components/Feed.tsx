import styled from "styled-components";
import {
  Music,
  Sidebar,
  Logo,
  LogoLikedSongs,
  LogoAbsolute,
} from "../components";

export const Stack = styled.div`
  position: relative;
  display: flex;

  .box {
    border-right: 1px solid #3d3d3d;

    // min-width: 15%;
    min-width: 13%;

    @media (min-width: 320px) {
      height: auto;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: 768px) {
      height: 92vh;
      padding-left: 2px;
      padding-right: 2px;
    }
  }

  // .tex {
  //   @media (min-width: 320px) {
  //     margin-top: 1.5px;
  //     color: #fff;
  //   }
  // }

  .sec {
    min-width: 85%;
    // border: 1px dashed red;

    .header {
      height: 250px;
      background: url(./svg/headbg.svg) no-repeat center center / cover;
      margin-bottom: 2.5rem;
    }

    .main {
      height: 92vh;
      padding-left: 1rem;
      // overflow-y: auto;
      // height: 90vh;
      // display: flex;
      // flex-wrap: wrap;

      .welcome {
        margin-bottom: 2.5rem;

        .welcome_h1 {
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 34px;
          letter-spacing: 0.04em;
          color: #ffffff;
        }
      }
    }
  }

  @media (min-width: 320px) {
    display: flex;
    flex-direction: flex-column;

    min-width: 22rem;
    background: #000;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Feed = () => {
  return (
    <Stack>
      <div className="box">
        <Sidebar />
      </div>
      <section className="sec">
        <div className="header"></div>

        <div className="main">
          <div className="welcome">
            <h1 className="welcome_h1">Welcome Back!</h1>
          </div>
          <Music />
        </div>
      </section>

      {/*top: 733px;
    left: 351px */}

      <LogoAbsolute name="home" top="733px" left="70px" />
      <LogoAbsolute name="discover" top="739px" left="161px" />
      <LogoAbsolute name="library" top="737px" left="254px" />
      <LogoAbsolute name="playlist" top="733px" left="351px" />
    </Stack>
  );
};

export default Feed;
