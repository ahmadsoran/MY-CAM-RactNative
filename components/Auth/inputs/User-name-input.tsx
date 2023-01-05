import { AntDesign, Feather } from "@expo/vector-icons";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";
import Colors from "../../../constants/Colors";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import MyInput from "../../Input";
import * as Haptic from "expo-haptics";
import { useEffect } from "react";
import { SuccesInputCheckerAnimatedIcon } from "../../Succes-input-checker-animated";
const UserNameInput = () => {
  const Username = UserRegisterStore((state) => state.username);
  const setUsername = UserRegisterStore((state) => state.setUsername);
  const UserNameErr = Username?.length >= 1 && Username.length < 4;
  const UserNameSuccess = Username.length > 4;

  const inputHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    setUsername(text);
  };
  useEffect(() => {
    if (UserNameErr)
      Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Error);
    else Haptic.notificationAsync(Haptic?.NotificationFeedbackType?.Success);
  }, [Username]);

  return (
    <MyInput
      leftIcon={<Feather name="user-check" size={20} color={"#80808081"} />}
      label="Username"
      onEndEditing={inputHandler}
      rightIcon={<SuccesInputCheckerAnimatedIcon show={UserNameSuccess} />}
      errorMessage={UserNameErr ? "User name must be longer than 4 word" : ""}
    />
  );
};

export default UserNameInput;
