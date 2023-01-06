import { Feather } from "@expo/vector-icons";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import MyInput from "../../Input";
import * as Haptic from "expo-haptics";
import { useEffect } from "react";
import { SuccesInputCheckerAnimatedIcon } from "../../Succes-input-checker-animated";

const ConfirmPasswordInput = () => {
  const ConfirmPassword = UserRegisterStore((state) => state.confirmPassword);
  const otherPassword = UserRegisterStore((state) => state.password);

  const setConfirmPassword = UserRegisterStore(
    (state) => state.setConfirmPassword
  );
  const ConfirmPasswordErr =
    ConfirmPassword?.length >= 1 && ConfirmPassword.length < 4;
  const ConfirmPasswordSuccess = ConfirmPassword.length > 4;
  const isConfirmed = ConfirmPassword === otherPassword;
  const inputHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    setConfirmPassword(text);
  };
  useEffect(() => {
    if (ConfirmPasswordErr)
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Error);
    else if (!isConfirmed)
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Error);
    else Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Success);
  }, [ConfirmPassword]);

  return (
    <MyInput
      leftIcon={<Feather name="lock" size={20} color={"#80808081"} />}
      label="ConfirmPassword"
      onEndEditing={inputHandler}
      rightIcon={
        <SuccesInputCheckerAnimatedIcon
          show={isConfirmed && ConfirmPasswordSuccess}
        />
      }
      errorMessage={
        ConfirmPasswordErr
          ? "ConfirmPassword must be longer than 4 word"
          : isConfirmed
          ? ""
          : "Passowrds not matched!"
      }
      secureTextEntry
      keyboardAppearance="light"
    />
  );
};

export default ConfirmPasswordInput;
