import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputEndEditingEventData,
} from "react-native";
import ScreenSheet from "../../components/ScreenSheet";
import AvatarIcon from "../../assets/images/wallet.png";
import { Text } from "../../components/Themed";
import CustomButton from "../../components/Custom-Button";
import MyInput from "../../components/Input";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { UserRegisterInfo } from "../../@types/UserRegisterInput";
import Colors from "../../constants/Colors";
import SignUp from "../../components/Auth/Sign-up";

const AuthMain = () => {
  const [UserInfo, setUserInfo] = useState<UserRegisterInfo>({
    brd: "",
    city: "",
    confirmPassword: "",
    email: "",
    gendar: "",
    name: "",
    password: "",
    username: "",
  });
  console.log(UserInfo);
  return (
    <ScreenSheet
      AvatarImage={AvatarIcon}
      FooterComponents={<CustomButton text="Next" />}>
      <Text style={styles.headerText}>Getting Started</Text>
      <SignUp />
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
