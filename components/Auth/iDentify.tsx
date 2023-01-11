import { StyleSheet } from "react-native";
import ImageCard from "../ImageCard";
import right_obj_icon from "../../assets/images/left-obj.png";
import left_obj_icon from "../../assets/images/right-obj.png";
import front_obj_icon from "../../assets/images/front-obj.png";
import { Button } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { SuccesInputCheckerAnimatedIcon } from "../Succes-input-checker-animated";
import { useNavigation } from "@react-navigation/native";
import { imageLibraryStore } from "../../States/Modal/ImageLibarary";
import Layout from "../../constants/Layout";
import { Text, View } from "../Themed";

const IDentify = () => {
  const ImageUrlOne = imageLibraryStore((state) => state.imageUrlOne);
  const ImageUrlTwo = imageLibraryStore((state) => state.imageUrlTwo);
  const ImageUrlThree = imageLibraryStore((state) => state.imageUrlThree);
  const setImageForCard = imageLibraryStore((state) => state.setImageForCard);
  const { navigate } = useNavigation();
  const UploadButtonHandelr = (card: string) => {
    navigate("CameraModal");
    setImageForCard(card);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Identiﬁcation</Text>
      <Text style={styles.description}>
        Please provide each photo as requested below:
      </Text>
      <View style={styles.IDentifyContainerCards}>
        <ImageCard
          imageSrc={ImageUrlOne ? { uri: ImageUrlOne } : front_obj_icon}
          imageHeight={Layout.window.width / 5}
          imageWidth={Layout.window.width / 5}
          title="Front"
          Rounded={10}
          Child={
            <Button
              icon={
                ImageUrlOne ? (
                  <SuccesInputCheckerAnimatedIcon
                    color="#12af41"
                    show
                    size={30}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="camera-plus-outline"
                    size={30}
                    color={Colors.light.primary}
                  />
                )
              }
              buttonStyle={{
                backgroundColor: ImageUrlOne ? "#dcffd9" : "whitesmoke",
              }}
              radius={10}
              onPress={() => UploadButtonHandelr("one")}
            />
          }
        />
        <ImageCard
          imageSrc={ImageUrlTwo ? { uri: ImageUrlTwo } : right_obj_icon}
          imageHeight={Layout.window.width / 5}
          imageWidth={Layout.window.width / 5}
          title="Right side"
          Rounded={10}
          Child={
            <Button
              icon={
                ImageUrlTwo ? (
                  <SuccesInputCheckerAnimatedIcon
                    color="#12af41"
                    show
                    size={30}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="camera-plus-outline"
                    size={30}
                    color={Colors.light.primary}
                  />
                )
              }
              buttonStyle={{
                backgroundColor: ImageUrlTwo ? "#dcffd9" : "whitesmoke",
              }}
              radius={10}
              onPress={() => UploadButtonHandelr("two")}
            />
          }
        />
        <ImageCard
          imageSrc={ImageUrlThree ? { uri: ImageUrlThree } : left_obj_icon}
          imageHeight={Layout.window.width / 5}
          imageWidth={Layout.window.width / 5}
          title="Left side"
          Rounded={10}
          Child={
            <Button
              icon={
                ImageUrlThree ? (
                  <SuccesInputCheckerAnimatedIcon
                    color="#12af41"
                    show
                    size={30}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="camera-plus-outline"
                    size={30}
                    color={Colors.light.primary}
                  />
                )
              }
              buttonStyle={{
                backgroundColor: ImageUrlThree ? "#dcffd9" : "whitesmoke",
              }}
              radius={10}
              onPress={() => UploadButtonHandelr("three")}
            />
          }
        />
      </View>
    </View>
  );
};

export default IDentify;

const styles = StyleSheet.create({
  Container: {
    padding: 10,
  },
  HeaderText: {
    fontFamily: "dm-sans-bold",
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    color: "gray",
    opacity: 0.6,
  },

  IDentifyContainerCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
