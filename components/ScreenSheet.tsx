import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Avatar } from "@rneui/themed";
import { ScreenSheetProps } from "../@types/ScreenSheet";
import { View } from "./Themed";

export default function ScreenSheet(Props: ScreenSheetProps) {
  const { AvatarImage, children, FooterComponents, icon } = Props;

  return (
    <View style={styles.container}>
      <View style={styles.AvatarContainer}>
        <View style={styles.AvatarBorder}>
          <View style={styles.AvatarBackground}>
            {AvatarImage ? (
              <Avatar source={AvatarImage} size={40} />
            ) : icon ? (
              icon
            ) : null}
          </View>
        </View>
      </View>
      {children}
      {FooterComponents}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    marginTop: 25,
    padding: "5%",
    height: "120%",
  },
  AvatarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  AvatarBorder: {
    backgroundColor: "#ffffff",
    top: "-50%",
    borderRadius: 1000,
    padding: 6,
    transform: [{ translateY: -10 }],
  },
  AvatarBackground: {
    backgroundColor: Colors.light.primary,
    borderRadius: 2000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 200,
    padding: 25,
    borderColor: "#fff",
    // borderWidth: 6,
    // transform: [{ translateY: -65 }],
  },
});
