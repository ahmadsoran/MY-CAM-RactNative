import { Button, ButtonProps } from "@rneui/base";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
type BtnProp = {
  text: string;
};
type Props = BtnProp & ButtonProps;
const CustomButton = (Props: Props) => {
  const { text } = Props;
  return (
    <Button
      buttonStyle={{
        backgroundColor: Colors.light.primary,
        padding: "5%",
        borderRadius: 10,
      }}
      containerStyle={{ paddingHorizontal: "5%", marginTop: "10%" }}
      title={text}
      {...Props}></Button>
  );
};

export default CustomButton;
