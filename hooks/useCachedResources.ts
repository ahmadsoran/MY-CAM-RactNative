import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { I18nManager } from "react-native";
import Layout from "../constants/Layout";
import UserLanguageStore, { languages } from "../States/App-settings/Language";
import { ShowOnboardingStore } from "../States/onboarding/ShowOnboarding";
import { UserData } from "../States/User/UserData";
import { GetFromStorage } from "./AsyncStorage";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const setShowOnboarding = ShowOnboardingStore((state) => state.setShow);
  const SetUserData = UserData((state) => state.SetUserData);
  const setUserLanguage = UserLanguageStore((state) => state.setLng);

  // Load any resources or data that we need prior to rendering the app
  console.log(Layout.isRTL);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "dm-sans": require("../assets/fonts/DMSans-Regular.ttf"),
          "dm-sans-bold": require("../assets/fonts/DMSans-Bold.ttf"),
          "dm-sans-med": require("../assets/fonts/DMSans-Regular.ttf"),
        });

        // check if onboard completed
        const userLng = (await GetFromStorage("lng")) as languages;
        const res = await GetFromStorage("Onboard-completed");
        const userData = await GetFromStorage("user-data");
        if (userLng) {
          Layout.isRTL = userLng === "en" ? false : true;
          setUserLanguage(userLng);
          i18next.changeLanguage(userLng);
        }
        if (res) setShowOnboarding(false);
        if (userData) SetUserData(JSON.parse(userData));
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
