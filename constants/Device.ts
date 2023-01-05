import { Platform } from "react-native";

const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";
const DEVICE_VERSION = Platform.Version.toString();

export default {
  isIOS,
  isAndroid,
  DEVICE_VERSION,
};
