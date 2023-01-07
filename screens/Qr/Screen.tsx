import { MaterialIcons } from "@expo/vector-icons";
import { Button, Image, Tab, TabView } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import CustomButton from "../../components/Custom-Button";
import ScreenSheet from "../../components/ScreenSheet";
import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { RootTabScreenProps } from "../../types";
import imageSrc from "../../assets/images/Qrcode.jpeg";
import Layout from "../../constants/Layout";
export default function QrScreen({}: RootTabScreenProps<"Qr">) {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{ backgroundColor: "#dff1ff", height: "100%" }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <ScreenSheet
          icon={
            <MaterialIcons name="qr-code-scanner" size={40} color="white" />
          }
          FooterComponents={<CustomButton text="Enter Manually" />}>
          <Tab
            value={index}
            indicatorStyle={{ backgroundColor: Colors.light.primary }}
            dense
            titleStyle={{ color: Colors.light.primary }}
            onChange={setIndex}>
            <Tab.Item title="Send" />
            <Tab.Item title="Receive" />
          </Tab>
          <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
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
});
