import React, { useRef, useEffect } from "react";
import styles from "./shapeWithPathText.module.css";

const ShapeWithPathText = ({ text }) => {
  const refShapeWithText = useRef(); // container dom node
  const refShapeWithTextPath = useRef(); // texpath dom node
  const initialStartOffset = 90; // initial text offset for text path

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const height = refShapeWithText.current.clientHeight; // height of container div

    const topY = refShapeWithText.current.getBoundingClientRect().top;
    const bottomY = refShapeWithText.current.getBoundingClientRect().bottom;
    //const scrollPosition = window.scrollY;

    if (topY >= 0 - height && topY <= windowHeight) {
      const offset =
        initialStartOffset -
        Math.floor(
          ((windowHeight + height - bottomY) / (windowHeight + height)) * 100
        );
      refShapeWithTextPath.current.setAttribute("startOffset", `${offset}%`);
    }

    const handleScroll = () => {
      const topY = refShapeWithText.current.getBoundingClientRect().top;
      const bottomY = refShapeWithText.current.getBoundingClientRect().bottom;
      //const scrollPosition = window.scrollY;

      if (topY >= 0 - height && topY <= windowHeight) {
        const offset =
          initialStartOffset -
          Math.floor(
            ((windowHeight + height - bottomY) / (windowHeight + height)) * 100
          );
        refShapeWithTextPath.current.setAttribute("startOffset", `${offset}%`);
        console.log("bottomY: " + bottomY);
        console.log("offset: " + offset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles.container} ref={refShapeWithText}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 741 741"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgb(245, 245, 220)"
          opacity="1"
          transform="rotate(-90 370 370)"
          d="M233.159 553.413C140.179 488.67 -6.17167 489.153 100.219 335.761C153.993 258.231 126.493 229.15 274.648 135.187C422.803 41.2234 520.827 133.738 628.833 241.744C731.477 344.388 616.155 494.218 534.648 553.413C425.053 633.007 276.112 583.321 233.159 553.413Z"
        />
        <path
          id="path-for-text-shape"
          transform="rotate(-90 370 370)"
          d="M233.159 553.413C140.179 488.67 -6.17167 489.153 100.219 335.761C153.993 258.231 126.493 229.15 274.648 135.187C422.803 41.2234 520.827 133.738 628.833 241.744C731.477 344.388 616.155 494.218 534.648 553.413C425.053 633.007 276.112 583.321 233.159 553.413Z"
        />

        <text className={styles.pathText}>
          <textPath
            ref={refShapeWithTextPath}
            id="text-path"
            xlinkHref="#path-for-text-shape"
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

export default ShapeWithPathText;
