import React, { useRef, useEffect } from "react";
import styles from "./RevealingText.module.css";

// TODO: How to de-hardcode textpath-length
const RevealingText = () => {
  const refRevealText = useRef(); // container dom node

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const height = refRevealText.current.clientHeight; // height of container div
    const topY = refRevealText.current.getBoundingClientRect().top;
    if (topY >= 0 - height && topY <= windowHeight) {
      const onLoadLength =
        100 -
        Math.floor(
          (Math.min(windowHeight - topY, windowHeight * 0.75) /
            (windowHeight * 0.75)) *
            100
        );
      refRevealText.current.style.clipPath = `inset(0 ${onLoadLength}% 0 0)`;
    }

    const handleScroll = () => {
      const topY = refRevealText.current.getBoundingClientRect().top;

      if (topY >= windowHeight * 0.25 && topY <= windowHeight) {
        const length =
          100 -
          Math.floor(
            (Math.min(windowHeight - topY, windowHeight * 0.75) /
              (windowHeight * 0.75)) *
              100
          );

        refRevealText.current.style.clipPath = `inset(0 ${length}% 0 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles.container} ref={refRevealText}>
      <p className={styles.text}>HERE IS A THING I MADE</p>
    </div>
  );
};

export default RevealingText;
