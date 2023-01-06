import OTPInputView from "@twotalltotems/react-native-otp-input";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ForgotCredintal from "../../../components/Auth/ForgotCredintal";
import CustomButton from "../../../components/Custom-Button";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import { RootStackScreenProps } from "../../../types";

const OTPScreen = ({ navigation }: RootStackScreenProps<"OTP">) => {
  const { navigate } = navigation;

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View>
          <ForgotCredintal
            Title="OTP Authentication"
            description="An authentication code has been sent to your email"
          />
          <View style={styles.OTP_Container}>
            <OTPInputView
              pinCount={4}
              autoFocusOnLoad={false}
              keyboardAppearance="light"
              codeInputFieldStyle={styles.OTP_Input}
              codeInputHighlightStyle={styles.OTP_Input_Hightlighted}
              selectionColor={Colors.light.primary}
              onCodeFilled={(e) => console.log(e)}
            />
          </View>
          <Text style={styles.resendCode}>
            I didn’t receive code.{"  "}
            <Text onPress={() => alert("test")} style={styles.resendCode.link}>
              Resend Code
            </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Next" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: "10%",
  },
  OTP_Container: {
    height: "10%",
    paddingHorizontal: "7%",
    marginTop: "20%",
  },
  OTP_Input: {
    backgroundColor: "#f4f5f7",
    borderWidth: 0,
    borderRadius: 20,
    width: Layout.window.width / 6,
    height: Layout.window.width / 6,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    color: "black",
  },
  OTP_Input_Hightlighted: {
    borderBottomColor: Colors.light.primary,
  },

  resendCode: {
    color: "black",
    fontFamily: "dm-sans",
    marginTop: "10%",
    textAlign: "center",

    link: {
      color: Colors.light.primary,
    },
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
});
