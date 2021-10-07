import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { ThemeContext } from "./src/utils/ThemeContext";
import BottomNavBar from "./src/components/BottomNavBar";
import ThemeSwitcher from "./src/components/ThemeSwitcher";

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode }}>
      <SafeAreaView
        style={{
          backgroundColor: lightMode ? "#F7F6F7" : "#06062A",
          ...styles.container,
        }}
      >
        <ThemeSwitcher />
        <BottomNavBar style={{ position: "absolute", bottom: -20 }} />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
