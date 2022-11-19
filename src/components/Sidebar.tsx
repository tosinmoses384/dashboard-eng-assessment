import React from "react";
import styled from "styled-components";
import { Logo, LogoLikedSongs } from "../components";
import { categories, categories1, categories2 } from "../utils/constants";

export const Stack = styled.div`
  color: #fff;

  .home-discover {
    width: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  .home-discover-music {
    position: relative;
    width: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  .home-discover-title {
    padding-left: 1rem;
  }

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 95%;
    overflow: auto;
  }
`;

const Sidebar = () => {
  return (
    <Stack>
      <>
        {categories1.map((category, index) => (
          <div
            style={{
              marginBottom: index === 1 ? "2rem" : "1rem",
              marginTop: index === 0 ? "2rem" : "1rem",
            }}
            className="home-discover"
            key={index}
          >
            <Logo name={category.icon} />
            <h6>{category.name}</h6>
            {category.name === "Liked Songs" && <Logo name={category.icon} />}
          </div>
        ))}

        <div className="home-discover-music">
          <Logo name="likedSongs" />
          <h6>Liked Songs</h6>
          <LogoLikedSongs name="music" top="0" left="145px" />
        </div>

        {categories2.map((category, index) => (
          <div
            style={{
              marginBottom: index === 1 ? "2rem" : "1rem",
            }}
            className="home-discover"
            key={index}
          >
            <Logo name={category.icon} />
            <h6>{category.name}</h6>
          </div>
        ))}

        <div
          style={{
            marginBottom: "2rem",
          }}
          className="home-discover-music"
        >
          <Logo name="playlist" />
          <h6>Liked Songs</h6>
          <LogoLikedSongs name="searchIcon" top="0" left="195px" />
        </div>

        {categories.map((category, index) => (
          <div
            style={{
              marginBottom: "1rem",
            }}
            className="home-discover-title"
            key={index}
          >
            <h6>{category.name}</h6>
          </div>
        ))}
      </>
    </Stack>
  );
};

export default Sidebar;
