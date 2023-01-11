import { StyleSheet } from "react-native";
import React from "react";
import { OnboardingSlide } from "../Data/onboarding-slide";
import { MotiView } from "moti";
import Colors from "../constants/Colors";
import { IndicatorStore } from "../States/onboarding/indecator-index";
import { View } from "./Themed";

const OnboardIndicator = () => {
  const IndicatorIndex = IndicatorStore((state) => state.index);

  return (
    <View>
      <View style={styles.indicatorContainer}>
        {OnboardingSlide.map((data, i) => (
          <MotiView
            key={i}
            style={{
              ...styles.indicatorStyle,
              backgroundColor:
                IndicatorIndex === data.slide_index
                  ? Colors.light.primary
                  : "gray",
            }}
            animate={{
              width: IndicatorIndex === data.slide_index ? 20 : 15 / 2,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default OnboardIndicator;

const styles = StyleSheet.create({
  indicatorStyle: {
    height: 5,
    marginHorizontal: 3,
    borderRadius: 50,
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
