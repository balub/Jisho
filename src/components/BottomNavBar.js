import React, { useContext } from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import { ThemeContext } from "../utils/ThemeContext";
import { width } from "styled-system";
import ShowMeaning from "./ShowMeaning";

export default function BottomNavBar({ handleNextPress, handlePrevPress }) {
  const { lightMode } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.circleBackground,
          backgroundColor: lightMode ? "#F7F6F7" : "#06062A",
        }}
      >
        <View
          style={{
            ...styles.circleForeground,
            backgroundColor: lightMode ? "#06062A" : "#F7F6F7",
          }}
        >
          <ShowMeaning fill={lightMode ? "#F7F6F7" : "#06062A"} />
        </View>
      </View>
      <View
        style={{
          ...styles.btnContainer,
          backgroundColor: lightMode ? "#06062A" : "#F7F6F7",
        }}
      >
        <TouchableOpacity onPress={handlePrevPress}>
          <Text
            style={{
              ...styles.BtnText,
              color: lightMode ? "#F7F6F7" : "#06062A",
            }}
          >
            prev
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPress}>
          <Text
            style={{
              ...styles.BtnText,
              color: lightMode ? "#F7F6F7" : "#06062A",
            }}
          >
            next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// cx=rect width/2

const styles = StyleSheet.create({
  container: {
    width: 350,
    minHeight: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  circleBackground: {
    width: 90,
    height: 90,
    borderRadius: 50,
    position: "relative",
    bottom: -45,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circleForeground: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 50,
    backgroundColor: "red",
  },
  BtnText: {
    fontSize: 30,
    fontFamily: "MontserratAlternates_900Black",
    fontWeight: "bold",
  },
});
