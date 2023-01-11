/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../@types/Navigation";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Onboarding: "on-boarding",
      Root: {
        screens: {
          Home: {
            screens: "Home",
          },
          Profile: {
            screens: "Profile",
          },
          inbox: { screens: "inbox" },
          Qr: { screens: "Qr" },
          TopUp: { screens: "TopUp" },
        },
      },
      CameraModal: "cam-modal",
      NotFound: "*",
      Auth: "Auth",
      OTP: "OTP",
    },
  },
};

export default linking;
