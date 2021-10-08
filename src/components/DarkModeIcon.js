import React from "react";
import { View } from "react-native";
import Svg, { Text, Path, ClipPath, Defs, G } from "react-native-svg";

function DarkModeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 35 35"
      {...props}
    >
      <G clipPath="url(#clip0)">
        <Path
          fill="#000"
          d="M17.5 16.04a6.577 6.577 0 014.373 4.377 6.59 6.59 0 014.377-4.375 6.594 6.594 0 01-4.377-4.375A6.576 6.576 0 0117.5 16.04zm11.668.002a4.392 4.392 0 012.917 2.918A4.384 4.384 0 0135 16.042a4.393 4.393 0 01-2.917-2.917 4.39 4.39 0 01-2.915 2.917zM27.71 2.917a6.584 6.584 0 01-4.372 4.376 6.592 6.592 0 014.376 4.378 6.584 6.584 0 014.37-4.378 6.594 6.594 0 01-4.374-4.376zM17.5 35C7.85 35 0 27.15 0 17.5S7.85 0 17.5 0c2.762 0 5.294.725 7.831 1.72-4.299.734-13.664 4.762-13.664 15.78 0 10.87 8.629 14.887 13.664 15.78C23.144 34.515 20.262 35 17.5 35z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" d="M0 0H35V35H0z"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default DarkModeIcon;
