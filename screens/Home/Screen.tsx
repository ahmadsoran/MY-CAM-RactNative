import { StyleSheet, Text, View } from "react-native";
import { RemoveFromStorage } from "../../hooks/AsyncStorage";
import { RootStackScreenProps } from "../../types";

export default function HomeRootScreen() {
  return (
    <View>
      <Text
        style={{
          color: "red",
          marginTop: 222,
        }}
        onPress={() => {
          RemoveFromStorage("Onboard-completed").then((res) => {
            console.log("🚀 ~ file: Screen.tsx:14 ~ HomeRootScreen ~ res", res);
            return res;
          });
        }}>
        Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
