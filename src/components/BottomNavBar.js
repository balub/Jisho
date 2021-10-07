import React from "react";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  Text,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

export default function BottomNavBar(props) {
  return (
    <Svg width="350" height="150" viewBox="0 0 350 60" {...props}>
      <Rect width="350" height="60" fill="yellow" border="50" rx="30" />
      <Circle cx="175" cy="0" r="45" fill="white" />
      <Circle cx="175" cy="0" r="35" fill="red" />
      <Path
        x="153"
        y="-10"
        d="M27.5 12C27.5 14.8406 25.0378 17.1429 22 17.1429C18.9622 17.1429 16.5 14.8406 16.5 12C16.5 11.6589 16.5367 11.3263 16.6045 11.004C19.3068 11.9314 21.9707 9.492 21.0137 6.93943C21.3327 6.888 21.6627 6.85714 22 6.85714C25.0378 6.85714 27.5 9.16114 27.5 12ZM22.0275 0C8.151 0 0 11.2303 0 11.2303C0 11.2303 8.86417 24 22.0275 24C36.2047 24 44 11.2303 44 11.2303C44 11.2303 36.1332 0 22.0275 0ZM22 20.5714C16.9382 20.5714 12.8333 16.7349 12.8333 12C12.8333 7.26686 16.9382 3.42857 22 3.42857C27.0637 3.42857 31.1667 7.26686 31.1667 12C31.1667 16.7349 27.0637 20.5714 22 20.5714Z"
        fill="black"
      />
      <Text
        fill="white"
        fontSize="30"
        fontWeight="bold"
        x="70"
        y="37.5"
        textAnchor="middle"
      >
        Prev
      </Text>
      <Text
        fill="white"
        fontSize="30"
        fontWeight="bold"
        x="274"
        y="37.5"
        textAnchor="middle"
      >
        Next
      </Text>
    </Svg>
  );
}

// cx=rect width/2
