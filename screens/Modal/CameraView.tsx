import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { View } from "../../components/Themed";
import { MaterialIcons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { AnimatePresence } from "moti/build";
import { SwitchCameraType } from "../../States/Modal/Camera-Type";
import * as ImagePicker from "expo-image-picker";
import { imageLibraryStore } from "../../States/Modal/ImageLibarary";
import { useNavigation } from "@react-navigation/native";

const CameraView = () => {
  const CameraType = SwitchCameraType((state) => state.CameraTypes);
  const setCameraType = SwitchCameraType((state) => state.CameraToggle);
  const [permssion, reqCamPermssion] = Camera.useCameraPermissions();
  const [pressedPicButton, setpressedPicButton] = useState(false);
  const ref = useRef<Camera>(null);
  useEffect(() => {
    if (!permssion?.granted) {
      reqCamPermssion();
    }
  }, []);

  const ToggleCameraTypeHandler = () => {
    setCameraType();
  };
  const TakePickButtonAnim = async () => {
    setpressedPicButton((status) => !status);
    if (ref.current) {
      Alert.alert("Unavailablie", "Upload pic  via photo library for testing");
    }
  };
  const setImageUrlOne = imageLibraryStore((state) => state.setImageUrlOne);
  const setImageUrlTwo = imageLibraryStore((state) => state.setImageUrlTwo);
  const setImageUrlThree = imageLibraryStore((state) => state.setImageUrlThree);
  const imageForCard = imageLibraryStore((state) => state.imageForCard);
  const { navigate } = useNavigation();
  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        if (imageForCard === "one") setImageUrlOne(result.assets[0].uri);
        if (imageForCard === "two") setImageUrlTwo(result.assets[0].uri);
        if (imageForCard === "three") setImageUrlThree(result.assets[0].uri);
        navigate("Auth");
      } else {
        alert("You did not select any image.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Camera
      style={styles.camera_container}
      type={CameraType}
      autoFocus={true}
      ref={ref}
      focusable={true}>
      <View style={styles.cameraButtonContainer}>
        <TouchableOpacity onPress={pickImageAsync}>
          <MaterialIcons
            style={styles.shadowButton}
            name="photo-album"
            size={40}
            color="white"
          />
        </TouchableOpacity>
        <AnimatePresence>
          <MotiView
            style={styles.cameraButton}
            onTouchEnd={TakePickButtonAnim}
            onTouchStart={TakePickButtonAnim}
            animate={{ scale: pressedPicButton ? 1.3 : 1 }}
            exit={{ scale: 1 }}
            transition={{ type: "spring" }}></MotiView>
        </AnimatePresence>

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
