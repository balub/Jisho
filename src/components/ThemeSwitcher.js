import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, Image, Button } from "react-native";

import { ThemeContext } from "../utils/ThemeContext";
import LightModeIcon from "./LightModeIcon";
import DarkModeIcon from "./DarkModeIcon";

export default function ThemeSwitcher(props) {
  const { lightMode, setLightMode } = useContext(ThemeContext);

  const HandlePress = () => {
    setLightMode(!lightMode);
  };

  if (lightMode) {
    return <DarkModeIcon onPress={HandlePress} {...props} />;
  } else {
    return <LightModeIcon onPress={HandlePress} {...props} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
