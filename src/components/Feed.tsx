import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

export const Stack = styled.div`
  display: flex;

  .box {
    border-right: 1px solid #3d3d3d;

    min-width: 15%;

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

  .tex {
    @media (min-width: 320px) {
      margin-top: 1.5px;
      color: #fff;
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
      <h3 className="tex">Enter your text here</h3>
    </Stack>
  );
};

export default Feed;
