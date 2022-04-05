import React from "react";

const PageArrowSVG = ({ fill, width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32">
      <g fill={fill}>
        <path
          d="M30 15v13.59L1.71.29.29 1.71 28.59 30H16v2h15a1 1 0 0 0 1-1V15z"
          data-name="8-Arrow Down"
        />
      </g>
    </svg>
  );
};

export default PageArrowSVG;
