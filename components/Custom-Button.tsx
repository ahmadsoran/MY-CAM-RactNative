import { Button, ButtonProps } from "@rneui/base";
import Colors from "../constants/Colors";
type BtnProp = {
  text: string;
  bg?: string;
};
type Props = BtnProp & ButtonProps;
const CustomButton = (Props: Props) => {
  const { text, bg } = Props;
  return (
    <Button
      buttonStyle={{
        backgroundColor: bg ? bg : Colors.light.primary,
        padding: "5%",
        borderRadius: 10,
      }}
      containerStyle={{ paddingHorizontal: "5%", marginTop: "10%" }}
      title={text}
      {...Props}></Button>
  );
};

export default CustomButton;
