import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import MyDivider from "../../components/Divider";
import GradientCard from "../../components/Gradient-card";
import BillPay from "../../components/Home/BillPay";
import RecentTransaction from "../../components/Home/RecentTransaction";
import Shop from "../../components/Home/Shop";
import SendReciveButtons from "../../components/Home/Transactions-Buttons";
import Layout from "../../constants/Layout";
import { UserData } from "../../States/User/UserData";

import { RootTabScreenProps } from "../../types";

export default function HomeRootScreen({
  navigation: { navigate },
}: RootTabScreenProps<"Home">) {
  const userData = UserData((state) => state.UserData);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <ScrollView scrollEnabled fadingEdgeLength={20}>
        <View style={styles.container}>
          <GradientCard
            username={userData?.name ? userData?.name : "Saman Saman"}
          />
          <SendReciveButtons />
          <MyDivider type="full" color="#d3d3d383" width={1} height={"200%"} />
          <RecentTransaction />
          <BillPay />
          <Shop />
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
});
