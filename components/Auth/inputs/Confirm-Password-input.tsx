import { Feather } from "@expo/vector-icons";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import MyInput from "../../Input";

import { SuccesInputCheckerAnimatedIcon } from "../../Succes-input-checker-animated";

const ConfirmPasswordInput = () => {
  const ConfirmPassword = UserRegisterStore((state) => state.confirmPassword);
  const ConfirmPasswordErr =
    ConfirmPassword?.length >= 1 && ConfirmPassword.length < 4;
  const ConfirmPasswordSuccess = ConfirmPassword.length > 4;
  const otherPassword = UserRegisterStore((state) => state.password);

  const setConfirmPassword = UserRegisterStore(
    (state) => state.setConfirmPassword
  );
  const isConfirmed = ConfirmPassword === otherPassword;
  const inputHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    setConfirmPassword(text);
  };

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
