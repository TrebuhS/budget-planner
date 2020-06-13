import * as React from "react";

function SvgWritingPad(props) {
  return (
    <svg
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 640 640"
      {...props}
    >
      <path d="M207.959 44.35h66.296C277.302 19.336 297.5 0 321.96 0c24.296 0 44.375 19.063 47.635 43.808l72.414.543c2.917.012 5.291 2.374 5.291 5.28v85.713a5.298 5.298 0 01-5.29 5.292H207.96c-2.906 0-5.28-2.374-5.28-5.292V49.631a5.285 5.285 0 015.28-5.28zm371.213 15.698h4.83v578.747h-4.83V640H56.008V60.048h125.99v57.496H114.45v462.502h409.505V117.544h-54.591V60.047h109.808zm-276.665.78c3.224 4.464 7.925 8.846 12.839 11.126 4.05 1.204 8.445 1.287 12.531.2 6.414-2.952 12.272-9.992 15.012-15.945.331-1.653.52-3.413.52-5.303 0-12.532-9.602-22.677-21.449-22.677-11.823 0-21.426 10.145-21.426 22.677 0 3.803.721 7.11 1.973 9.921z" />
    </svg>
  );
}

export default SvgWritingPad;
