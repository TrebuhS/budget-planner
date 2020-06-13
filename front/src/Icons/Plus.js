import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 640 640"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path d="M567.704 245.802c40.016-.307 72.39 31.878 72.308 71.906-.094 40.017-32.61 72.71-72.627 73.017l-175.49 1.228-1.228 175.691c-.331 39.686-33.012 71.824-72.993 71.777-39.993-.047-72.131-32.28-71.8-71.977l1.216-174.475-174.793 1.228c-40.016.307-72.39-31.878-72.308-71.906.095-40.017 32.61-72.71 72.627-73.017l175.49-1.228 1.228-175.691C249.665 32.669 282.347.53 322.327.578c39.993.047 72.131 32.28 71.8 71.977l-1.216 174.475 174.793-1.228z" />
    </svg>
  );
}

export default SvgPlus;
