import { MaterialIcons } from "@expo/vector-icons";
import { Button, Image, Tab } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import CustomButton from "../../components/Custom-Button";
import ScreenSheet from "../../components/ScreenSheet";
import Colors from "../../constants/Colors";
import { RootTabScreenProps } from "../../@types/Navigation";
import imageSrc from "../../assets/images/Qrcode.jpeg";
import Layout from "../../constants/Layout";
import { View } from "../../components/Themed";
import MyTabs from "../../components/QR/Tabs";

export default function QrScreen({}: RootTabScreenProps<"Qr">) {
  function IndexHandelr(e: number) {
    setIndex(e);
  }
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <SafeAreaView style={{ backgroundColor: "#dff1ff", height: "100%" }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <ScreenSheet
          icon={
            <MaterialIcons name="qr-code-scanner" size={40} color="white" />
          }>
          <MyTabs onChange={IndexHandelr} index={index} />
          <ScrollView
            style={{ top: "-10%", height: "110%" }}
            scrollEnabled
            showsVerticalScrollIndicator={false}>
            <View
              style={[
                styles.cameraContainer,
                index !== 0 && { display: "none" },
              ]}>
              <Image
                style={{
                  width: Layout.window.width / 1.4,
                  height: Layout.window.width / 2,
                  borderRadius: 5,
                  bottom: 0,
                }}
                source={imageSrc}
                fadeDuration={300}
                transition={true}
                transitionDuration={300}
                placeholderStyle={{ backgroundColor: "transparent" }}
                PlaceholderContent={
                  <ActivityIndicator animating color={Colors.light.primary} />
                }
              />
              <Button
                icon={
                  <MaterialIcons
                    name="camera-alt"
                    size={30}
                    color={Colors.light.primary}
                  />
                }
                buttonStyle={{
                  marginTop: 40,
                  backgroundColor: "white",
                }}
              />
              <CustomButton text="Enter Manually" />
            </View>
          </ScrollView>
        </ScreenSheet>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#dff1ff",
    paddingTop: "15%",
  },
  cameraContainer: {
    padding: "10%",
  },
  tabs: {
    transform: [{ translateY: -40 }],
    direction: "rtl",
    zIndex: 999,
  },
});
