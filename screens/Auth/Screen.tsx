import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AuthHeader from "./Header";
import AuthMain from "./Main";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}>
          <ScrollView
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll={true}
            invertStickyHeaders={true}>
            <AuthHeader />
            <AuthMain />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dff1ff",
    height: "100%",
  },
});
