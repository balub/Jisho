import React, { useContext } from "react";
import Svg, { Circle, Text, Path, Rect } from "react-native-svg";
import { TouchableOpacity, StyleSheet } from "react-native";

import { ThemeContext } from "../utils/ThemeContext";
import { styles } from "styled-system";

export default function BottomNavBar(props) {
  const { lightMode, handleNextPress } = useContext(ThemeContext);

  return <View style={styles.container}>
  </View>;
}

// cx=rect width/2

const styles = StyleSheet.create({
  container: {
    
  },
});
