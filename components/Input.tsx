import { StyleSheet } from "react-native";
import { Input, InputProps } from "@rneui/themed";

const MyInput = (props: InputProps) => {
  const {
    style,
    inputContainerStyle,
    labelStyle,
    leftIconContainerStyle,
    rightIconContainerStyle,
  } = props;
  return (
    <Input
      style={[styles.InputStyle, style]}
      underlineColorAndroid={"transparent"}
      inputContainerStyle={[styles.InputContainerStyle, inputContainerStyle]}
      labelStyle={[styles.labelStyle, labelStyle]}
      leftIconContainerStyle={[
        styles.leftIconContainerStyle,
        leftIconContainerStyle,
      ]}
      rightIconContainerStyle={[
        styles.rightIconContainerStyle,
        rightIconContainerStyle,
      ]}
      errorStyle={{ color: "red" }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  InputStyle: {
    padding: 10,
  },
  InputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: "#f4f5f7",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  labelStyle: {
    opacity: 0.7,
    fontFamily: "dm-sans",
    paddingVertical: 10,
  },
  leftIconContainerStyle: {
    backgroundColor: "#f4f5f7",
  },
  rightIconContainerStyle: {
    backgroundColor: "#f4f5f7",
  },
});
export default MyInput;
