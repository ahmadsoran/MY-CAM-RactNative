import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { GetFromStorage } from "./hooks/AsyncStorage";
import OnboardingScreen from "./screens/onboarding/Screen";
import { ShowOnboardingStore } from "./States/onboarding/ShowOnboarding";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const showOnboarding = ShowOnboardingStore((state) => state.show);
  const setShowOnboarding = ShowOnboardingStore((state) => state.setShow);

  useEffect(() => {
    GetFromStorage("Onboard-completed").then((res) => {
      if (res) {
        setShowOnboarding(false);
      }
    });
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {showOnboarding ? (
          <OnboardingScreen />
        ) : (
          <Navigation colorScheme={colorScheme} />
        )}
        <StatusBar animated={true} style="inverted" />
      </SafeAreaProvider>
    );
  }
}
