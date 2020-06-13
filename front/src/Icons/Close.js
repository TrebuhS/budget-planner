import * as React from "react";

function SvgClose(props) {
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
      <path d="M479.64 23.8c36.544-37.111 95.954-37.277 132.71-.355 36.72 36.898 36.886 96.91.354 133.998L452.367 320.071 612.87 482.864c36.237 36.804 35.74 96.438-1.086 133.195-36.84 36.745-96.072 36.65-132.285-.165L320.07 454.234 160.36 616.203c-36.544 37.11-95.954 37.276-132.71.354-36.721-36.898-36.887-96.91-.355-133.998L187.632 319.93 27.13 157.137C-9.106 120.334-8.61 60.7 28.217 23.942c36.839-36.744 96.072-36.65 132.285.165l159.427 161.66L479.64 23.798z" />
    </svg>
  );
}

export default SvgClose;
