import React, { useRef, useEffect } from "react";

import styles from "./EllipseWithText.module.css";
import { setStartOffset } from "../lib/animation-utils";
import ThumbsUpImg from "../assets/images/Thumbsup.png";

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
        viewBox="0 0 680 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="hireMeTitle hireMeDescription"
        role="img"
      >
        <title id="hireMeTitle">Thumbs up graphic</title>
        <desc id="hireMeDescription">
          A graphic of a hand making a "thumbs-up" gesture surrounded by an
          animated text, saying "Good? Now hire me", placed next to the contact
          form.
        </desc>

        <ellipse id={styles.ellipse} cx="340" cy="360" rx="250" ry="280" />
        <image
          xlinkHref={ThumbsUpImg}
          x="85"
          y="150"
          width="500"
          height="400"
        />
        <path
          id="path-for-text-ellipse"
          fill="none"
          /* d="M90,360A250,280 0 1 1590,360A250,280 0 1 190,360" */
          d="M590,360 A250,280 0 1 1 90,360 A250,280 0 1 1590,360A250,280 0 1 190,360"
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
