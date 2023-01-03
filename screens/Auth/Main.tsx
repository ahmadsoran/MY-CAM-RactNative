import { StyleSheet } from "react-native";
import ScreenSheet from "../../components/ScreenSheet";
import AvatarIcon from "../../assets/images/wallet.png";
import { Text } from "../../components/Themed";
import CustomButton from "../../components/Custom-Button";

const AuthMain = () => {
  return (
    <ScreenSheet
      AvatarImage={AvatarIcon}
      FooterComponents={<CustomButton text="Next" />}>
      <Text style={styles.headerText}>Getting Started</Text>
    </ScreenSheet>
  );
};

export default AuthMain;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "dm-sans-bold",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    
  },
});
