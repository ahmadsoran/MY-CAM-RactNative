import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";

type Props = {
  Title: string;
  description: string;
};

const ForgotCredintal = ({ Title, description }: Props) => {
  return (
    <>
      <View style={styles.HeaderContainer}>
        <Ionicons
          name="wallet-outline"
          color={Colors.light.primary}
          size={25}
        />
        <Text onPress={() => alert("Create an account then")}>
          Forgot your credintal?
        </Text>
      </View>
      <View style={styles.HeaderTextContainer}>
        <Text style={styles.HeaderText}>{Title}</Text>
        <Text style={styles.HeaderTextLight}>{description}</Text>
      </View>
    </>
  );
};

export default ForgotCredintal;

const styles = StyleSheet.create({
  HeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: "7%",
  },
  HeaderTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "7%",
  },
  HeaderText: {
    color: "black",
    fontFamily: "dm-sans-bold",
    fontSize: 20,
    marginBottom: 10,
  },
  HeaderTextLight: {
    color: "gray",
    fontFamily: "dm-sans",
    fontSize: 16,
    textAlign: "center",
  },
});
