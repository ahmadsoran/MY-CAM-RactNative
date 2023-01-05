import { SafeAreaView, StyleSheet } from "react-native";
import IntroOnboarding from "./intro";
export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <IntroOnboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
