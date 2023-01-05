import { AntDesign, Feather } from "@expo/vector-icons";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import MyInput from "../../Input";
import * as Haptic from "expo-haptics";
import { useEffect } from "react";
import { SuccesInputCheckerAnimatedIcon } from "../../Succes-input-checker-animated";

const PasswordInput = () => {
  const Password = UserRegisterStore((state) => state.password);
  const setPassword = UserRegisterStore((state) => state.setPassword);
  const PasswordErr = Password?.length >= 1 && Password.length < 4;
  const PasswordSuccess = Password.length > 4;

  const inputHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    setPassword(text);
  };
  useEffect(() => {
    if (PasswordErr)
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Error);
    else Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Success);
  }, [Password]);

  return (
    <MyInput
      leftIcon={<Feather name="lock" size={20} color={"#80808081"} />}
      label="Password"
      onEndEditing={inputHandler}
      rightIcon={<SuccesInputCheckerAnimatedIcon show={PasswordSuccess} />}
      errorMessage={PasswordErr ? "Password must be longer than 4 word" : ""}
      secureTextEntry
    />
  );
};

export default PasswordInput;
