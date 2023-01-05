import { AnimatePresence, View } from "moti";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

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
  return (
    <AnimatePresence>
      {show && (
        <View
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
    </AnimatePresence>
  );
};
