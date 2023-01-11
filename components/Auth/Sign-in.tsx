import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GetFromStorage } from "../../hooks/AsyncStorage";
import UserAccStatusStore from "../../States/Auth/AccountStatus";
import UserSignInStore from "../../States/Auth/SignIn/Inputs";
import CustomButton from "../Custom-Button";
import MyInput from "../Input";
import { SuccesInputCheckerAnimatedIcon } from "../Succes-input-checker-animated";
import { Text, View } from "../Themed";
import ForgotCredintal from "./ForgotCredintal";

const SignIN = () => {
  const setUserAccountStatus = UserAccStatusStore((state) => state.setStatus);
  const UserName = UserSignInStore((state) => state.username);
  const setUserName = UserSignInStore((state) => state.setUsername);
  const UserNameErr = UserName?.length >= 1 && UserName.length < 4;
  /////////////////////
  const Password = UserSignInStore((state) => state.password);
  const setPassword = UserSignInStore((state) => state.setPassword);
  const PasswordErr = Password?.length >= 1 && Password.length < 4;
  /////////////////
  const { navigate } = useNavigation();
  const [IsAccountExist, setIsAccountExist] = useState<boolean | null>(null);
  const [IsLoading, setIsLoading] = useState(false);
  const StatusHandler = () => {
    setUserAccountStatus("sign-up");
  };
  const inputHandelr = (data: string, input: "username" | "pass") => {
    if (input === "username") {
      setUserName(data);
    } else {
      setPassword(data);
    }
  };
  const SignInHandelr = () => {
    setIsLoading(true);
  };
  useEffect(() => {
    if (IsLoading) {
      const timeOut = setTimeout(async () => {
        try {
          const res = await GetFromStorage("user-data");
          if (res) {
            setIsAccountExist(true);
          } else {
            setIsAccountExist(false);
          }
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }, 3000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [IsLoading]);
  useEffect(() => {
    if (IsAccountExist) {
      const timeout = setTimeout(() => {
        navigate("OTP");
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [IsAccountExist]);

  return (
    <SafeAreaView style={styles.container}>
      <ForgotCredintal
        Title="Let’s Sign You In"
        description="Welcome back, you’ve been missed!"
      />
      <View style={styles.InputsContainer}>
        <MyInput
          leftIcon={<AntDesign name="user" color="#808080a1" size={25} />}
          label="Username"
          rightIcon={
            <SuccesInputCheckerAnimatedIcon show={UserName.length > 4} />
          }
          onEndEditing={(e) => inputHandelr(e.nativeEvent.text, "username")}
          errorMessage={UserNameErr ? "Username most longer than 4 word" : ""}
          keyboardAppearance="light"
          keyboardType="email-address"
        />
        <MyInput
          leftIcon={<AntDesign name="lock" color="#808080a1" size={25} />}
          label="Password"
          rightIcon={
            <SuccesInputCheckerAnimatedIcon show={Password.length > 4} />
          }
          onEndEditing={(e) => inputHandelr(e.nativeEvent.text, "pass")}
          errorMessage={PasswordErr ? "Password most longer than 4 word" : ""}
          secureTextEntry
          keyboardAppearance="light"
        />
      </View>
      {IsAccountExist !== null && !IsAccountExist && (
        <Text style={styles.errorMessage}>
          Account is not exist please create an account
        </Text>
      )}
      <View style={styles.btnContainer}>
        <CustomButton
          text={IsAccountExist ? "" : "Sign in"}
          containerStyle={styles.btn}
          onPress={SignInHandelr}
          loading={IsLoading}
          bg={IsAccountExist ? "#55da55" : ""}
          icon={
            <SuccesInputCheckerAnimatedIcon
              show={IsAccountExist ? true : false}
              color="green"
            />
          }
        />
        <CustomButton
          text="Create an account"
          bg="whitesmoke"
          titleStyle={{ color: "black" }}
          containerStyle={styles.btn}
          onPress={StatusHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIN;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    padding: "5%",
    justifyContent: "space-between",
  },
  InputsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    paddingHorizontal: "2.5%",
  },
  btn: {
    marginVertical: "2%",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
  },
});
