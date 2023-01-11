import { View } from "moti";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useId } from "react";

type Props = {
  show: boolean;
  color?: string;
  size?: number;
};

export const SuccesInputCheckerAnimatedIcon = ({
  show,
  size,
  color,
}: Props) => {
  const id = useId();
  return (
    <>
      {show && (
        <View
          key={id}
          from={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}>
          <AntDesign
            name="checkcircleo"
            color={color ?? Colors.light.primary}
            size={size ?? 20}
          />
        </View>
      )}
    </>
  );
};
