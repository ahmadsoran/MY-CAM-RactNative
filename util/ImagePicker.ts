import * as ImagePicker from "expo-image-picker";

const pickImageAsync = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0];
    } else {
      return alert("You did not select any image.");
    }
  } catch (error) {
    return console.log(error);
  }
};

export default pickImageAsync;
