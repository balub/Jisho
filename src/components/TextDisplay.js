import React, { useContext, useRef } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

import { ThemeContext } from "../utils/ThemeContext";
import Vocabs from "../utils/N5_vocabs.json";
import BottomNavBar from "./BottomNavBar";

const SLIDER_WIDTH = Dimensions.get("window").width;

export default function TextDisplay() {
  const { lightMode, showMeaning } = useContext(ThemeContext);
  const carouselRef = useRef(null);

  const MeaningCard = ({ item, index }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          style={{
            ...styles.headingText,
            color: lightMode ? "#06062A" : "#F7F6F7",
          }}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {item.kanji}
        </Text>
        <View
          style={{
            ...styles.meaningContainer,
            backgroundColor: lightMode ? "#06062A" : "#F7F6F7",
          }}
        >
          <Text
            style={{
              ...styles.meaningText,
              color: lightMode ? "#F7F6F7" : "#06062A",
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {item.hiragana}
          </Text>
          <Text
            style={{
              ...styles.meaningText,
              color: lightMode ? "#F7F6F7" : "#06062A",
            }}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {item.meaning}
          </Text>
        </View>
      </View>
    );
  };

  const MeaningCardOnlyText = ({ item, index }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          style={{
            ...styles.headingText,
            color: lightMode ? "#06062A" : "#F7F6F7",
          }}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {item.kanji}
        </Text>
      </View>
    );
  };

  const handleNextPress = () => {
    carouselRef.current.snapToNext();
  };
  const handlePrevPress = () => {
    carouselRef.current.snapToPrev();
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={Vocabs}
        renderItem={showMeaning ? MeaningCard : MeaningCardOnlyText}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        style={{ justifyContent: "center" }}
        layout={"default"}
      />
      <BottomNavBar
        style={{ position: "absolute", bottom: -70 }}
        handleNextPress={handleNextPress}
        handlePrevPress={handlePrevPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingText: {
    fontSize: 100,
    fontFamily: "MontserratAlternates_800ExtraBold",
  },
  meaningContainer: {
    height: "70%",
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  meaningText: {
    fontSize: 48,
    fontFamily: "MontserratAlternates_800ExtraBold",
    textAlign: "center",
  },
});
