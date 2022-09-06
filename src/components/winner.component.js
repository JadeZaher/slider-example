/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function Winner() {
  return (
    <>
      {/* wrapper */}
      <div
        css={css`
          background-color: white;
          width: 40%;
          height: 40%;
          border-radius: 10px;
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-content: flex-start;
        `}
      >
        {/* images section */}
        <div
          css={css`
            height: 50%;
            width: 100%;
            background-color: aliceblue;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
          `}
        >
          {/* winner image */}
          <div
            css={css`
              width: 45%;
              height: 100%;
              border: 0.3em solid black;
              border-radius: 10px;
              border-style: groove;
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
              `}
              src="https://images.pexels.com/photos/12733781/pexels-photo-12733781.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </div>
          {/* item image */}
          <div
            css={css`
              width: 65%;
              height: 100%;
              z-index: 2;
              margin-left: -12px;
              border: 0.3em solid black;
              border-radius: 10px;
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: cover;
              `}
              src="https://images.pexels.com/photos/12733781/pexels-photo-12733781.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
          </div>
        </div>
        {/* home winnner info wrapper */}
        <div css={css`
          display: flex;
          align-self: center;
          align-items: center;
          justify-content: center;
          width: 80%;
          height: 80%;
        `}>
        <p>Hello</p>
        </div>
      </div>
    </>
  );
}
