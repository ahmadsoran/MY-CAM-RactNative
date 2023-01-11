import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import SignIN from "../../components/Auth/Sign-in";
import UserAccStatusStore from "../../States/Auth/AccountStatus";
import AuthHeader from "./Header";
import AuthMain from "./Main";
import * as Haptic from "expo-haptics";
import { useEffect } from "react";
import { UserRegisterStore } from "../../States/Auth/Signup/Inputs";
import UserSignInStore from "../../States/Auth/SignIn/Inputs";
import { RootStackScreenProps } from "../../@types/Navigation";
import { View } from "../../components/Themed";
export default function AuthScreen({
  navigation,
  route,
}: RootStackScreenProps<"Auth">) {
  const UserAccountStatus = UserAccStatusStore((state) => state.status);
  /////// register inputs ////////
  // --------------- username ---------------/

  const Username = UserRegisterStore((state) => state.username);
  const UserNameErr = Username?.length >= 1 && Username.length < 4;
  const UserNameSuccess = Username.length > 4;
  // --------------- end ---------------/
  // --------------- pass ---------------/
  const Password = UserRegisterStore((state) => state.password);
  const PasswordErr = Password?.length >= 1 && Password.length < 4;
  const PasswordSuccess = Password.length > 4;
  // --------------- end ---------------/
  // --------------- confirm pass ---------------/

  const ConfirmPassword = UserRegisterStore((state) => state.confirmPassword);
  const ConfirmPasswordErr =
    ConfirmPassword?.length >= 1 && ConfirmPassword.length < 4;
  const ConfirmPasswordSuccess = ConfirmPassword.length > 4;
  // --------------- end ---------------/

  // --------------- email ---------------/
  const Email = UserRegisterStore((state) => state.email);
  const EmailErr = Email.length > 0 && !Email.includes("@" && ".");
  const EmailSuccess = Email.includes("@" && ".");
  // --------------- end ---------------/
  ///////////////////////////////////////
  /////////// sgin in inputs /////////
  // --------------- username ---------------/
  const SginIn_UserName = UserSignInStore((state) => state.username);
  const SginIn_UserNameErr =
    SginIn_UserName?.length >= 1 && SginIn_UserName.length < 4;
  const SginIn_UserNameSuccess = SginIn_UserName.length > 4;
  // ----------------- end ---------------- //
  // --------------- pass ---------------/
  const SginIn_Password = UserSignInStore((state) => state.password);
  const SginIn_PasswordErr =
    SginIn_Password?.length >= 1 && SginIn_Password.length < 4;
  const SginIn_PasswordSuccess = SginIn_Password.length > 4;
  // --------------- end ---------------/
  ///////////
  useEffect(() => {
    if (
      UserNameErr ||
      PasswordErr ||
      EmailErr ||
      SginIn_PasswordErr ||
      SginIn_UserNameErr ||
      ConfirmPasswordErr
    )
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Error);
    else if (
      UserNameSuccess ||
      PasswordSuccess ||
      ConfirmPasswordSuccess ||
      EmailSuccess ||
      SginIn_UserNameSuccess ||
      SginIn_PasswordSuccess
    )
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Success);
  }, [
    Username,
    Password,
    Email,
    SginIn_Password,
    SginIn_UserName,
    ConfirmPassword,
  ]);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {UserAccountStatus === "sign-in" ? (
        <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={0}>
          <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
            <SignIN />
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={0}>
          <ScrollView
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll={true}
            invertStickyHeaders={true}>
            <AuthHeader />
            <AuthMain navigation={navigation} route={route} />
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dff1ff",
    height: "100%",
  },
});
