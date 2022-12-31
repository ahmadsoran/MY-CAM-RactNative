import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { SwitchCameraType } from "../../States/Home/Camera-Type";
import { Camera } from "expo-camera";
import { View } from "../../components/Themed";
import { MaterialIcons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { AnimatePresence } from "moti/build";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
type Props = {};

const CameraView = (props: Props) => {
  const CameraType = SwitchCameraType((state) => state.CameraTypes);
  const setCameraType = SwitchCameraType((state) => state.CameraToggle);
  const [permssion, reqCamPermssion] = Camera.useCameraPermissions();
  const [pressedPicButton, setpressedPicButton] = useState(false);
  const [Zoom, setZoom] = useState(0);
  useEffect(() => {
    if (!permssion?.granted) {
      reqCamPermssion();
    }
  }, [permssion?.granted]);

  const ToggleCameraTypeHandler = () => {
    setCameraType();
  };
  const TakePickButtonAnim = async () => {
    setpressedPicButton((status) => !status);
  };

  const ZoomInGesture = Gesture.Pan()
    .runOnJS(true)
    .minDistance(40)
    .onChange((e) => {
      if (e.y > -200 && e.y < 1) {
        const Y = +Math.abs(e.y / 100).toFixed(3);
        if (Y < 0.7) {
          setZoom(Y);
        }
        console.log("number is ", Zoom);
      }
    });

  return (
    <Camera
      style={styles.camera_container}
      type={CameraType}
      autoFocus={true}
      focusable={true}
      zoom={Zoom}>
      <View style={styles.cameraButtonContainer}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Hello 👋", "this app only for test thx", [
              { style: "cancel", text: "ok" },
            ])
          }>
          <MaterialIcons
            style={styles.shadowButton}
            name="photo-album"
            size={40}
            color="white"
          />
        </TouchableOpacity>
        <GestureDetector gesture={ZoomInGesture} userSelect="auto">
          <AnimatePresence>
            <MotiView
              style={styles.cameraButton}
              onTouchEnd={TakePickButtonAnim}
              onTouchStart={TakePickButtonAnim}
              animate={{ scale: pressedPicButton ? 1.3 : 1 }}
              exit={{ scale: 1 }}
              transition={{ type: "spring" }}></MotiView>
          </AnimatePresence>
        </GestureDetector>
        <TouchableOpacity onPress={ToggleCameraTypeHandler}>
          <MaterialIcons
            style={styles.shadowButton}
            name="flip-camera-ios"
            size={40}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export default CameraView;

const styles = StyleSheet.create({
  camera_container: {
    width: "100%",
    height: "100%",
  },
  cameraButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingBottom: "15%",
    flexDirection: "row",
    padding: "5%",
    backgroundColor: "transparent",
  },
  cameraButton: {
    width: 70,
    height: 70,
    borderRadius: 1000,
    backgroundColor: "#ffffff00",
    borderWidth: 5,
    borderColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowButton: {
    shadowColor: "#0000008f",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
});
