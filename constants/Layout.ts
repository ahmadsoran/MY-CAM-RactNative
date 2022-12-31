import { Dimensions } from "react-native";
import { getLocales } from "expo-localization";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const isRTL: boolean = getLocales()[0]?.textDirection === "rtl" ? true : false;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isRTL,
};
