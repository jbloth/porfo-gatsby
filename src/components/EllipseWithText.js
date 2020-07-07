import React, { useRef, useEffect } from "react";
import styles from "./EllipseWithText.module.css";
import { setStartOffset } from "../lib/animation-utils";

const EllipseWithText = ({ text }) => {
  const refEllipseWithText = useRef(); // container dom node
  const refEllipseWithTextPath = useRef(); // texpath dom node
  const initialStartOffset = 0; // initial text offset for text path

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    // initial start-offset of text-path
    setStartOffset(
      refEllipseWithText,
      refEllipseWithTextPath,
      initialStartOffset,
      80
    );

    // scroll handling
    const handleScroll = () => {
      setStartOffset(
        refEllipseWithText,
        refEllipseWithTextPath,
        initialStartOffset,
        80
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles.container} ref={refEllipseWithText}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 740 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="370" cy="400" rx="250" ry="280" fill="#f5f5dc" />
        <image
          xlinkHref="/images/Thumbsup.png"
          x="105"
          y="180"
          width="500"
          height="400"
        />
        <path
          id="path-for-text-ellipse"
          fill="none"
          /*d="M120,400a250,280 0 1,0 500,0a250,280 0 1,0 -500,0"*/
          /* d="M120,400A250,280 0 1 1620,400A250,280 0 1 1120,400"*/
          d="M620,400 A250,280 0 1 1 120,400 A250,280 0 1 1620,400A250,280 0 1 1120,400"
        />

        <text className={styles.pathText} dy="-10">
          <textPath
            ref={refEllipseWithTextPath}
            id="text-path"
            xlinkHref="#path-for-text-ellipse"
            startOffset={`${initialStartOffset}%`}
            alignmentBaseline="text-bottom"
            method="stretch"
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default EllipseWithText;
