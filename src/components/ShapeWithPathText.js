import React, { useRef, useEffect } from "react";
import styles from "./shapeWithPathText.module.css";
import { setStartOffset } from "../lib/animation-utils";
import PortraitImg from "../assets/images/Me.png";
import PortraitImg_webp from "../assets/images/Me.webp";

const ShapeWithPathText = ({ text }) => {
  const refShapeWithText = useRef(); // container dom node
  const refShapeWithTextPath = useRef(); // texpath dom node
  const initialStartOffset = -10; // initial text offset for text path

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    // initial start-offset of text-path
    setStartOffset(
      refShapeWithText,
      refShapeWithTextPath,
      initialStartOffset,
      80
    );

    // scroll handling
    const handleScroll = () => {
      setStartOffset(
        refShapeWithText,
        refShapeWithTextPath,
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
    <div className={styles.container} ref={refShapeWithText}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 710 740"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="myNameIsTitle myNameIsDescription"
        role="img"
      >
        <title id="myNameIsTitle">Portrait image of the site's owner</title>
        <desc id="myNameIsDescription">
          Portrait image of a woman surrounded by an animated text, saying "My
          name is Julia..."
        </desc>

        <defs>
          <mask id="mask">
            <path
              fill="#fff"
              opacity="1"
              transform="rotate(-90 370 370)"
              d="M233.159 553.413C140.179 488.67 -6.17167 489.153 100.219 335.761C153.993 258.231 126.493 229.15 274.648 135.187C422.803 41.2234 520.827 133.738 628.833 241.744C731.477 344.388 616.155 494.218 534.648 553.413C425.053 633.007 276.112 583.321 233.159 553.413Z"
            />
          </mask>
        </defs>

        <path
          id={styles.shape}
          opacity="1"
          transform="rotate(-90 370 370)"
          d="M233.159 553.413C140.179 488.67 -6.17167 489.153 100.219 335.761C153.993 258.231 126.493 229.15 274.648 135.187C422.803 41.2234 520.827 133.738 628.833 241.744C731.477 344.388 616.155 494.218 534.648 553.413C425.053 633.007 276.112 583.321 233.159 553.413Z"
        />
        <path
          id="path-for-text-shape"
          transform="rotate(-90 370 370)"
          d="M233.159 553.413C140.179 488.67 -6.17167 489.153 100.219 335.761C153.993 258.231 126.493 229.15 274.648 135.187C422.803 41.2234 520.827 133.738 628.833 241.744C731.477 344.388 616.155 494.218 534.648 553.413C425.053 633.007 276.112 583.321 233.159 553.413 C140.179 488.67 -6.17167 489.153 100.219 335.761 C153.993 258.231 126.493 229.15 274.648 135.187"
        />

        {/* <image
          xlinkHref={PortraitImg}
          alt="Portrait of the site owner"
          x="125"
          y="60"
          width="500"
          height="700"
          mask="url(#mask)"
        /> */}
        <foreignObject
          x="125"
          y="100"
          width="500"
          height="625"
          mask="url(#mask)"
        >
          <picture>
            <source
              width="500"
              height="auto"
              type="image/webp"
              srcSet={PortraitImg_webp}
            />
            <source
              width="500"
              height="auto"
              type="image/png"
              srcSet={PortraitImg}
            />
            <img
              x="125"
              y="160"
              width="500"
              height="auto"
              src={PortraitImg}
              alt="Portrait of the site owner"
            />
          </picture>
        </foreignObject>

        <text className={styles.pathText} dy="-10">
          <textPath
            ref={refShapeWithTextPath}
            id="shape-text-path"
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
