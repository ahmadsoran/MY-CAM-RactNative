import { Link } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";

const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ backgroundColor: "transparent" }}>
        <Icon name="close" color="gray" />
      </TouchableOpacity>

      <Text style={styles.text}>
        Already have an account?{" "}
        <Link style={styles.link} to={"/sign-in"}>
          Sign in
        </Link>
      </Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    padding: 30,
    marginTop: "10%",
  },
  text: {
    fontFamily: "dm-sans",
    fontSize: 16,
    color: "gray",
  },
  link: {
    color: "blue",
  },
});
