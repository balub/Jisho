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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeContext.Provider value={{ lightMode, setLightMode }}>
        <SafeAreaView
          style={{
            backgroundColor: lightMode ? "#F7F6F7" : "#06062A",
            ...styles.container,
          }}
        >
          <ThemeSwitcher style={{ position: "absolute", top: 50, right: 20 }} />
          <TextDisplay style={{ marginTop: 10 }} />
          <BottomNavBar style={{ position: "absolute", bottom: -20 }} />
        </SafeAreaView>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
