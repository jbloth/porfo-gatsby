// import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import React, { useRef, useEffect } from "react";

import { breakPoints } from "../../styles/theme";

const MyNameIs = () => {
  const refMyName = useRef(); // container dom node
  const textPathRef_MyName = useRef(); // texpath dom node
  const initialStartOffset = 26; // initil text offset for text path

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    const height = refMyName.current.clientHeight; // height of container div
    const handleScroll = () => {
      const topY = refMyName.current.getBoundingClientRect().top;
      const bottomY = refMyName.current.getBoundingClientRect().bottom;

      if (topY <= 0 && bottomY >= 0) {
        const offset =
          initialStartOffset - Math.floor((Math.abs(topY) / height) * 100);
        textPathRef_MyName.current.setAttribute("startOffset", `${offset}%`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={refMyName}>
      <svg
        width="100%"
        height="100%"
        //viewBox="0 0 1440 555"
        viewBox="0 0 994 555"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path-for-text"
          d="M-127 494.343C-13 509.343 120.582 489.431 233 418.343C403 310.843 395.089 197.37 550 70.343C637.805 -1.65701 847 -78.157 984.5 -56.157"
        />
        <path
          className="noodle"
          d="M-127 494.343C-13 509.343 120.582 489.431 233 418.343C403 310.843 395.089 197.37 550 70.343C637.805 -1.65701 847 -78.157 984.5 -56.157"
          stroke="black"
        />
        <text className="pathText">
          <textPath
            ref={textPathRef_MyName}
            id="text-path"
            xlinkHref="#path-for-text"
            startOffset={`${initialStartOffset}%`}
            alignmentBaseline="middle"
            method="stretch"
          >
            MY NAME IS JULIA
          </textPath>
        </text>
      </svg>

      <style jsx>{`
        .noodle {
          stroke-width: 110;
        }

        .pathText {
          font-family: Orbitron;
          font-size: 4rem;
          letter-spacing: 1.4rem;
          fill: #d5b6e4;
        }

        @media only screen and (max-width: ${breakPoints.bp_md}) {
        }
      `}</style>
    </div>
  );
};

export default MyNameIs;
