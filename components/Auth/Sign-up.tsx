import { StyleSheet } from "react-native";
import React from "react";
import UserNameInput from "./inputs/User-name-input";
import NameInput from "./inputs/Name-input";
import EmailInput from "./inputs/Email-input";
import PasswordInput from "./inputs/Password-input";
import ConfirmPasswordInput from "./inputs/Confirm-Password-input";
import DatePickerInput from "./inputs/Date-picker-input";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <>
      <NameInput />
      <UserNameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <DatePickerInput />
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
