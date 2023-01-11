import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import UserAccount from "../../components/Profile/UserAccount";
import UserSettingsList from "../../components/Profile/UserSettingsList";
import { UserData } from "../../States/User/UserData";
import { RootTabScreenProps } from "../../@types/Navigation";
import { View } from "../../components/Themed";

export default function ProfileScreen({}: RootTabScreenProps<"Profile">) {
  const userData = UserData((state) => state.UserData);

  return (
    <SafeAreaView style={{ backgroundColor: "#f4f5f7" }}>
      <StatusBar style="dark" />
      <ScrollView scrollEnabled fadingEdgeLength={20}>
        <View style={styles.container}>
          <UserAccount name={userData?.name} />
          <UserSettingsList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f4f5f7",
    paddingHorizontal: "8%",
    paddingBottom: "5%",
  },
});
