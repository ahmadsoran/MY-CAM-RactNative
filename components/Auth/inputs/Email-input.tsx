import MyInput from "../../Input";
import { AntDesign } from "@expo/vector-icons";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";
import { useEffect } from "react";
import * as Haptic from "expo-haptics";
import { SuccesInputCheckerAnimatedIcon } from "../../Succes-input-checker-animated";
const EmailInput = () => {
  const Email = UserRegisterStore((state) => state.email);
  const setEmail = UserRegisterStore((state) => state.setEmail);
  const EmailErr = Email.length > 0 && !Email.includes("@" && ".");
  const EmailSuccess = Email.includes("@" && ".");
  const inputHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    setEmail(text);
  };
  useEffect(() => {
    if (EmailErr)
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Error);
    else if (EmailSuccess)
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Success);
  }, [Email]);

  return (
    <MyInput
      leftIcon={<AntDesign name="mail" size={20} color={"#80808081"} />}
      label="Email"
      onEndEditing={inputHandler}
      spellCheck={false}
      keyboardType="email-address"
      rightIcon={<SuccesInputCheckerAnimatedIcon show={EmailSuccess} />}
      errorMessage={EmailErr ? "invaild email" : ""}
    />
  );
};

export default EmailInput;
