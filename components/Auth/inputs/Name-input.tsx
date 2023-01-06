import MyInput from "../../Input";
import { FontAwesome5 } from "@expo/vector-icons";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from "react-native";

const NameInput = () => {
  const Name = UserRegisterStore((state) => state.name);
  const setName = UserRegisterStore((state) => state.setName);
  const inputHandler = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    setName(text);
  };
  console.log(Name);
  return (
    <MyInput
      leftIcon={
        <FontAwesome5 name="user-circle" size={20} color={"#80808081"} />
      }
      label="Full Name"
      onEndEditing={inputHandler}
      spellCheck={false}
      keyboardAppearance="light"
    />
  );
};

export default NameInput;
