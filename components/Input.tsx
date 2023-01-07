import { StyleSheet } from "react-native";
import { Input, InputProps } from "@rneui/themed";

type Props = {
  UIcolor?: string;
};

const MyInput = (props: Props & InputProps) => {
  const {
    style,
    inputContainerStyle,
    labelStyle,
    leftIconContainerStyle,
    rightIconContainerStyle,
    UIcolor,
  } = props;

  return (
    <Input
      style={[styles.InputStyle, style]}
      underlineColorAndroid={"transparent"}
      inputContainerStyle={[
        styles.InputContainerStyle,
        inputContainerStyle,
        UIcolor && { backgroundColor: UIcolor },
      ]}
      labelStyle={[styles.labelStyle, labelStyle]}
      leftIconContainerStyle={[
        styles.leftIconContainerStyle,
        leftIconContainerStyle,
        { backgroundColor: UIcolor },
      ]}
      rightIconContainerStyle={[
        styles.rightIconContainerStyle,
        rightIconContainerStyle,
        { backgroundColor: UIcolor },
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
    paddingHorizontal: 10,
    backgroundColor: "#f4f5f7",
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
