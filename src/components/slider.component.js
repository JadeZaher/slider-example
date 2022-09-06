/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Winner from "./winner.component";

export default function SliderComponent ({homeWinners}) {
  return (
    // slider wrapper
    <div
      css={css`
        background-color: red;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        align-items: center;
        display: flex;
        flex-direction: row;
        align-content: center;
        transition: 0.35s;
      `}
    >
      {/* slider items */}
      {/* home winner component */}
      <Winner/>
    </div>
  );
};


