import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AuthHeader from "./Header";
import AuthMain from "./Main";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <View style={styles.wrapper}>
          <AuthHeader />
        </View>
        <AuthMain />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dff1ff",
    height: "100%",
  },
  wrapper: {
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    backgroundColor: "transparent",
  },
});
