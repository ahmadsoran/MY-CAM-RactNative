import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { ViewProps } from "./Themed";

type Props = {
  type: "full" | "middle text";
  text?: string;
  color: string;
  width?: number | string;
  textStyle?: TextStyle;
  height?: string | number;
  overflow?: "hidden";
  CustomStyle?: ViewProps["style"];
};

const MyDivider = (props: Props) => {
  const { type, text, color, width, textStyle, height, overflow, CustomStyle } =
    props;
  return (
    <View
      style={[
        styles.DivaiderContainer,
        overflow && { overflow: "hidden" },
        CustomStyle,
      ]}>
      <View
        style={{
          backgroundColor: color,
          width: height ? height : "100%",
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
  },
});
