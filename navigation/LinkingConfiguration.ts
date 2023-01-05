/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

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
        },
      },
      CameraModal: "cam-modal",
      NotFound: "*",
      Auth: {
        screens: {
          SginUp: "SignUp",
          SginIn: "Signin",
        },
      },
    },
  },
};

export default linking;
