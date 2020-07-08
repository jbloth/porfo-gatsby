import React, { useRef, useEffect } from "react";
import styles from "./WanderingText.module.css";
import { setStartOffset } from "../lib/animation-utils";

const WanderingText = ({ text }) => {
  const refWanderText = useRef(); // container dom node
  const refWanderTextPath = useRef(); // textpath dom node
  const initialStartOffset = -30; // initial text offset for text path

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    // initial start-offset of text-path
    setStartOffset(refWanderText, refWanderTextPath, initialStartOffset, 100);

    const handleScroll = () => {
      setStartOffset(refWanderText, refWanderTextPath, initialStartOffset, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={refWanderText}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path-for-text-ima"
          d="M-52 103.217C110.5 64 252 55 408.5 55C697.5 55 834.361 108.919 1060.5 131C1209 145.5 1379.5 155.937 1513 103.217"
        />

        <text className={styles.pathText}>
          <textPath
            ref={refWanderTextPath}
            id="text-path"
            xlinkHref="#path-for-text-ima"
            startOffset={`${initialStartOffset}%`}
            alignmentBaseline="middle"
            method="stretch"
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default WanderingText;
