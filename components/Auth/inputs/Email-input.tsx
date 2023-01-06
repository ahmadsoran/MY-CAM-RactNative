import MyInput from "../../Input";
import { AntDesign } from "@expo/vector-icons";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";

import { SuccesInputCheckerAnimatedIcon } from "../../Succes-input-checker-animated";
const EmailInput = () => {
  const setEmail = UserRegisterStore((state) => state.setEmail);
  const Email = UserRegisterStore((state) => state.email);
  const EmailErr = Email.length > 0 && !Email.includes("@" && ".");
  const EmailSuccess = Email.includes("@" && ".");
  const inputHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    setEmail(text);
  };

  return (
    <MyInput
      leftIcon={<AntDesign name="mail" size={20} color={"#80808081"} />}
      label="Email"
      onEndEditing={inputHandler}
      spellCheck={false}
      keyboardType="email-address"
      rightIcon={<SuccesInputCheckerAnimatedIcon show={EmailSuccess} />}
      errorMessage={EmailErr ? "invaild email" : ""}
      keyboardAppearance="light"
    />
  );
};

export default EmailInput;
