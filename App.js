import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BottomNavBar from "./src/components/BottomNavBar";

export default function App() {
  return (
    <View style={styles.container}>
      <BottomNavBar style={{ position: "absolute", bottom: -20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
