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
import Documentation from "../../components/Auth/Documentation";
import { useState } from "react";

const AuthMain = () => {
  const UserRegisterData = UserRegisterStore((state) => {
    return {
      brd: state.brd,
      city: state.city,
      confirmPassword: state.confirmPassword,
      password: state.password,
      email: state.email,
      gendar: state.gendar,
      name: state.name,
    };
  });
  const [IsError, setIsError] = useState(false);
  const IsInvalidData = Object.values(UserRegisterData)
    .map((data) => data.length > 1)
    .includes(false);

  const Step = ShowOnboardingStore((state) => state.setps);
  const setStep = ShowOnboardingStore((state) => state.setSteps);
  const UploadDataHandelr = () => {
    if (Step === "2" && IsInvalidData) {
      setIsError(false);
      SetToStorage("user-data", JSON.stringify(UserRegisterData));
      setStep("3");
    } else {
      setIsError(true);
    }
  };
  return (
    <ScreenSheet
      AvatarImage={Step === "2" ? AvatarIcon : SignalRicon}
      FooterComponents={
        <CustomButton
          onPress={UploadDataHandelr}
          text={!IsError ? "Next" : "Invalid data"}
          bg={IsError ? "red" : ""}
        />
      }>
      <Text style={styles.headerText}>
        {Step === "2" ? "Getting Started" : "Almost There!"}
      </Text>
      {Step === "2" && (
        <Text style={styles.Description}>Create an account to continue!</Text>
      )}
      {Step === "3" ? (
        <>
          <IDentify />
          <Documentation />
        </>
      ) : (
        <SignUp />
      )}
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
