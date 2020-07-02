import React, { useRef, useEffect } from "react";

const ImAWebDeveloper = () => {
  const refImA = useRef(); // container dom node
  const textPathRef = useRef(); // texpath dom node
  const initialStartOffset = 60; // initil text offset for text path

  // Set scroll listener TODO: better use useLayoutEffect?
  useEffect(() => {
    const height = refImA.current.clientHeight; // height of container div
    const handleScroll = () => {
      const topY = refImA.current.getBoundingClientRect().top;
      const bottomY = refImA.current.getBoundingClientRect().bottom;
      //const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (topY >= 0 - height && bottomY <= windowHeight + height) {
        const offset =
          initialStartOffset -
          Math.floor(((windowHeight - topY) / height) * 60);
        textPathRef.current.setAttribute("startOffset", `${offset}%`);
        // console.log("topY: " + topY);
        // console.log("offset: " + offset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={refImA}>
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
        <path
          d="M-56.569 71.5553C156.431 52.0555 268.005 47.3628 411.431 71.5553C701.931 120.556 805.931 223.38 1045.93 292.055C1211.93 339.556 1451.93 354.556 1585.43 292.055"
          stroke="black"
          strokeWidth="110"
        />

        <text className="pathText">
          <textPath
            ref={textPathRef}
            id="text-path"
            xlinkHref="#path-for-text-ima"
            startOffset={`${initialStartOffset}%`}
            alignmentBaseline="middle"
            method="stretch"
          >
            I'M A WEB DEVELOPER BUT THAT'S OK
          </textPath>
        </text>
      </svg>

      <style jsx>{`
        .pathText {
          font-family: Orbitron;
          font-size: 4rem;
          letter-spacing: 2rem;
          fill: #d5b6e4;
        }
      `}</style>
    </div>
  );
};

export default ImAWebDeveloper;
