import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

type Props = {
  type: "full" | "middle text";
  text?: string;
  color: string;
  width?: number | string;
  textStyle?: TextStyle;
};

const MyDivider = (props: Props) => {
  const { type, text, color, width, textStyle } = props;
  return (
    <View style={styles.DivaiderContainer}>
      <View
        style={{
          backgroundColor: color,
          width: "100%",
          height: width ? width : 1,
        }}></View>
      {type === "middle text" && (
        <>
          <Text style={textStyle}>{text}</Text>
          <View
            style={{
              backgroundColor: color,
              width: "100%",
              height: width ? width : 1,
            }}></View>
        </>
      )}
    </View>
  );
};

export default MyDivider;

const styles = StyleSheet.create({
  DivaiderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "10%",
    position: "relative",
    overflow: "hidden",
  },
});
