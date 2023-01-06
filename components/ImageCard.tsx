import { Image } from "@rneui/themed";
import {
  ActivityIndicator,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

type Props = {
  Rounded?: number;
  imageSrc?: ImageSourcePropType;
  imageWidth: number;
  imageHeight: number;
  textStyle?: TextStyle;
  title?: string;
  Child?: React.ReactNode;
  styles?: ViewStyle;
};

const ImageCard = (props: Props) => {
  return (
    <View style={styles.parent}>
      <View
        style={[
          styles.container,
          {
            borderRadius: props.Rounded,
          },
          { ...props.styles },
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
  parent: {
    width: Layout.window.width / 4,
  },

  container: {
    padding: "5%",
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    marginTop: "10%",
    color: "black",
    fontFamily: "dm-sans",
    fontSize: 15,
  },
});
