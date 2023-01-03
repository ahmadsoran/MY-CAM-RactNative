import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { SafeAreaView, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import AuthHeader from "./Header";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <View style={styles.wrapper}>
          <AuthHeader />
        </View>
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
