import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CustomButton from "../../components/Custom-Button";
import MyDivider from "../../components/Divider";
import GradientCard from "../../components/Gradient-card";
import MyInput from "../../components/Input";
import { SuccesInputCheckerAnimatedIcon } from "../../components/Succes-input-checker-animated";

import { UserData } from "../../States/User/UserData";

import { RootTabScreenProps } from "../../@types/Navigation";
import { View } from "../../components/Themed";

export default function TopUpScreen({}: RootTabScreenProps<"TopUp">) {
  const userData = UserData((state) => state.UserData);

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar style="dark" />
      <ScrollView scrollEnabled>
        <View style={styles.container}>
          <GradientCard
            username={userData?.name ? userData?.name : "Saman Saman"}
          />
          <View style={styles.content}></View>
          <MyInput
            leftIcon={<MaterialIcons name="dialpad" color="gray" size={20} />}
            label="Enter Code"
            rightIcon={
              <SuccesInputCheckerAnimatedIcon show={true} color="green" />
            }
            UIcolor="#f4f5f7"
          />
          <CustomButton text="Submit" />
          <MyDivider
            type="middle text"
            color="#80808050"
            text="Or"
            textStyle={{ color: "#8080809d", marginHorizontal: 10 }}
            overflow="hidden"
          />
          <MyInput
            leftIcon={
              <MaterialIcons name="qr-code-scanner" color="gray" size={20} />
            }
            UIcolor="#f4f5f7"
            disabled
            value="Scan the Qr code"
            textAlign="center"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: "8%",
    paddingVertical: "15%",
  },
  content: {
    paddingVertical: 10,
  },
});
