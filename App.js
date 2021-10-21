import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import {
  useFonts,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_900Black,
} from "@expo-google-fonts/montserrat-alternates";
import AppLoading from "expo-app-loading";

import { ThemeContext } from "./src/utils/ThemeContext";
import BottomNavBar from "./src/components/BottomNavBar";
import ThemeSwitcher from "./src/components/ThemeSwitcher";
import TextDisplay from "./src/components/TextDisplay";

export default function App() {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_800ExtraBold,
    MontserratAlternates_900Black,
  });
  const [lightMode, setLightMode] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeContext.Provider
        value={{ lightMode, setLightMode, showMeaning, setShowMeaning }}
      >
        <SafeAreaView
          style={{
            backgroundColor: lightMode ? "#F7F6F7" : "#06062A",
            ...styles.container,
          }}
        >
          <View style={{ width: "100%" }}>
            <ThemeSwitcher
              style={{ position: "absolute", top: 0, right: 10 }}
            />
          </View>
          <TextDisplay />
        </SafeAreaView>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
