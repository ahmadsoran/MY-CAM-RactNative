import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootTabParamList, RootTabScreenProps } from "../../types";

const ProfileHeader = ({
  navigate,
}: BottomTabNavigationProp<ParamListBase, string, undefined>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
      <TouchableOpacity
        style={styles.rightIcon}
        onPress={() => navigate("inbox")}>
        <Ionicons name="notifications-outline" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: "13%",
    paddingBottom: "2%",
    paddingHorizontal: "10%",
    position: "relative",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "dm-sans-bold",
  },
  rightIcon: {
    position: "absolute",
    right: "10%",
    bottom: "50%",
  },
});
