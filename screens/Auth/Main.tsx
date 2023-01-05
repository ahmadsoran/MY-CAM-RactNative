import { StyleSheet } from "react-native";
import ScreenSheet from "../../components/ScreenSheet";
import AvatarIcon from "../../assets/images/wallet.png";
import SignalRicon from "../../assets/images/SignalR.png";
import { Text } from "../../components/Themed";
import CustomButton from "../../components/Custom-Button";
import SignUp from "../../components/Auth/Sign-up";
import { UserRegisterStore } from "../../States/Auth/Signup/Inputs";
import { SetToStorage } from "../../hooks/AsyncStorage";
import IDentify from "../../components/Auth/iDentify";
import { ShowOnboardingStore } from "../../States/onboarding/ShowOnboarding";

const AuthMain = () => {
  const UserRegisterData = JSON.stringify(
    UserRegisterStore((state) => {
      return {
        brd: state.brd,
        city: state.city,
        confirmPassword: state.confirmPassword,
        password: state.password,
        email: state.email,
        gendar: state.gendar,
        name: state.name,
      };
    })
  );
  const Step = ShowOnboardingStore((state) => state.setps);
  const setStep = ShowOnboardingStore((state) => state.setSteps);
  const UploadDataHandelr = () => {
    if (Step === "2") {
      SetToStorage("user-data", UserRegisterData);
      setStep("3");
    }
  };
  return (
    <ScreenSheet
      AvatarImage={Step === "2" ? AvatarIcon : SignalRicon}
      FooterComponents={
        <CustomButton onPress={UploadDataHandelr} text="Next" />
      }>
      <Text style={styles.headerText}>
        {Step === "2" ? "Getting Started" : "Almost There!"}
      </Text>
      {Step === "2" && (
        <Text style={styles.Description}>Create an account to continue!</Text>
      )}
      {Step === "3" ? <IDentify /> : <SignUp />}
    </ScreenSheet>
  );
};

export default AuthMain;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "dm-sans-bold",
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    top: "-3%",
  },
  Description: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    top: "-2%",
  },
});
