import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Text, View } from "./Themed";

type Props = {
  Icon?: React.ReactNode;
  Title?: string;
  description?: string;
  RightText?: string | undefined;
  EndIcon?: React.ReactNode;
  CustomStyle?: ViewStyle;
  onPress?(): void;
};
export default function HorizontalList({
  EndIcon,
  Icon,
  RightText,
  Title,
  description,
  CustomStyle,
  onPress,
}: Props) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[styles.container, CustomStyle && CustomStyle]}>
        <View style={styles.AvatarContainer}>
          {Icon}
          <View style={styles.textContainer}>
            {Title && (
              <Text numberOfLines={1} style={styles.username}>
                {Title}
              </Text>
            )}
            {description && <Text style={styles.phone}>{description}</Text>}
          </View>
        </View>
        <View style={styles.RightContainer}>
          {RightText && <Text style={styles.AccStatusText}>{RightText}</Text>}
          {EndIcon}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 5,
    padding: "5%",
    marginVertical: "5%",
  },

  AvatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  username: {
    color: "black",
    fontFamily: "dm-sans-bold",
    fontSize: 13,
    maxWidth: 100,
  },
  phone: {
    color: "gray",
    opacity: 0.5,
    fontSize: 11,
  },
  RightContainer: {
    flexDirection: "row",
  },
  textContainer: {
    paddingHorizontal: "4%",
  },
  AccStatusText: {
    color: "#ff8800",
    padding: "2%",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#ffdd9ebe",
    fontSize: 10,
    textAlignVertical: "center",
    textAlign: "center",
    marginHorizontal: 5,
  },
});
