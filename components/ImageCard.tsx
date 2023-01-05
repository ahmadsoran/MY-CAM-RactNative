import { Image } from "@rneui/themed";
import {
  ActivityIndicator,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
import Colors from "../constants/Colors";

type Props = {
  Rounded?: number;
  imageSrc?: ImageSourcePropType;
  imageWidth: number;
  imageHeight: number;
  textStyle?: TextStyle;
  title?: string;
  Child?: React.ReactNode;
};

const ImageCard = (props: Props) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          {
            borderRadius: props.Rounded,
          },
        ]}>
        <Image
          style={{
            width: props.imageWidth,
            height: props.imageHeight,
            borderRadius: 5,
          }}
          source={props.imageSrc}
          fadeDuration={300}
          transition={true}
          transitionDuration={300}
          placeholderStyle={{ backgroundColor: "transparent" }}
          PlaceholderContent={
            <ActivityIndicator animating color={Colors.light.primary} />
          }
        />
        {props.title && (
          <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        )}
      </View>
      {props.Child}
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    // width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    marginTop: "10%",
    color: "black",
    fontFamily: "dm-sans",
    fontSize: 15,
  },
});
