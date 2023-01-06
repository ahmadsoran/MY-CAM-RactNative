import { StyleSheet } from "react-native";
import React from "react";
import UserNameInput from "./inputs/User-name-input";
import NameInput from "./inputs/Name-input";
import EmailInput from "./inputs/Email-input";
import PasswordInput from "./inputs/Password-input";
import ConfirmPasswordInput from "./inputs/Confirm-Password-input";
import DatePickerInput from "./inputs/Date-picker-input";
import { CityList } from "../../Data/CityList";
import { UserRegisterStore } from "../../States/Auth/Signup/Inputs";
import DropDown from "../DropDown";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { CheckBox } from "@rneui/themed";

type Props = {};

const SignUp = (props: Props) => {
  const setCity = UserRegisterStore((state) => state.setCity);
  const setGendar = UserRegisterStore((state) => state.setGendar);
  const city = UserRegisterStore((state) => state.city);
  const gendar = UserRegisterStore((state) => state.gendar);

  return (
    <>
      <NameInput />
      <UserNameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <DropDown
        data={CityList}
        label="City"
        setSelected={setCity}
        SelectedTEXT={city}
        leftIcon={<Ionicons name="location" size={20} color="gray" />}
        rightIcon={
          <MaterialIcons name="arrow-drop-down" size={20} color="gray" />
        }
      />
      <DropDown
        data={["Male", "Female"]}
        label="Gender"
        setSelected={setGendar}
        SelectedTEXT={gendar}
        leftIcon={<Ionicons name="location" size={20} color="gray" />}
        rightIcon={
          <MaterialIcons name="arrow-drop-down" size={20} color="gray" />
        }
      />
      <DatePickerInput />
      <CheckBox
        checked
        title="By creating an account, you agree to our Term and Conditions"
      />
    </>
  );
};

export default SignUp;
