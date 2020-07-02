import React, { useRef, useEffect } from "react";
import styles from "./WanderingText.module.css";

const WanderingText = ({ text }) => {
  const refWanderText = useRef(); // container dom node
  const refWanderTextPath = useRef(); // textpath dom node
  const initialStartOffset = 60; // initial text offset for text path

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const height = refWanderText.current.clientHeight; // height of container div

    const topY = refWanderText.current.getBoundingClientRect().top;
    const bottomY = refWanderText.current.getBoundingClientRect().bottom;
    //const scrollPosition = window.scrollY;

    if (topY >= 0 - height && topY <= windowHeight) {
      const offset =
        initialStartOffset -
        Math.floor(
          ((windowHeight + height - bottomY) / (windowHeight + height)) * 100
        );
      refWanderTextPath.current.setAttribute("startOffset", `${offset}%`);
    }

    const handleScroll = () => {
      const topY = refWanderText.current.getBoundingClientRect().top;
      const bottomY = refWanderText.current.getBoundingClientRect().bottom;
      //const scrollPosition = window.scrollY;

      if (topY >= 0 - height && topY <= windowHeight) {
        const offset =
          initialStartOffset -
          Math.floor(
            ((windowHeight + height - bottomY) / (windowHeight + height)) * 100
          );
        refWanderTextPath.current.setAttribute("startOffset", `${offset}%`);
        // console.log("bottomY: " + bottomY);
        // console.log("offset: " + offset);
      }
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
        viewBox="0 0 1440 389"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path-for-text-ima"
          d="M-56.569 71.5553C156.431 52.0555 268.005 47.3628 411.431 71.5553C701.931 120.556 805.931 223.38 1045.93 292.055C1211.93 339.556 1451.93 354.556 1585.43 292.055"
        />
        {/* <path
          d="M-56.569 71.5553C156.431 52.0555 268.005 47.3628 411.431 71.5553C701.931 120.556 805.931 223.38 1045.93 292.055C1211.93 339.556 1451.93 354.556 1585.43 292.055"
          stroke="black"
          strokeWidth="110"
        /> */}

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
