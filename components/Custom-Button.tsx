import { Button, ButtonProps } from "@rneui/base";
import Colors from "../constants/Colors";
type BtnProp = {
  text?: string;
  bg?: string;
  textColor?: string;
  TextSpace?: number | string;
  ExtraButtonStyle?: object;
};
type Props = BtnProp & ButtonProps;
const CustomButton = (Props: Props) => {
  const {
    text,
    bg,
    textColor,
    titleStyle,
    TextSpace,
    ExtraButtonStyle,
    containerStyle,
  } = Props;
  return (
    <Button
      buttonStyle={[
        {
          backgroundColor: bg ? bg : Colors.light.primary,
          padding: "5%",
          borderRadius: 10,

          ...ExtraButtonStyle,
        },
      ]}
      titleStyle={[
        titleStyle,
        {
          color: textColor ? textColor : "white",
          marginHorizontal: TextSpace ? TextSpace : 0,
        },
      ]}
      containerStyle={[
        containerStyle,
        {
          paddingHorizontal: "5%",
          marginTop: "10%",
        },
      ]}
      title={text}
      {...Props}></Button>
  );
};

export default CustomButton;
