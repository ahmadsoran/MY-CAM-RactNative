/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import { GetFromStorage } from "../hooks/AsyncStorage";
import useColorScheme from "../hooks/useColorScheme";
import OTPScreen from "../screens/Auth/OTP/Screen";
import AuthScreen from "../screens/Auth/Screen";
import HomeRootScreen from "../screens/Home/Screen";
import CameraModal from "../screens/Modal/CameraModal";
import NotFoundScreen from "../screens/NotFoundScreen";
import OnboardingScreen from "../screens/onboarding/Screen";
import { ShowOnboardingStore } from "../States/onboarding/ShowOnboarding";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const showOnboarding = ShowOnboardingStore((state) => state.show);
  const setShowOnboarding = ShowOnboardingStore((state) => state.setShow);

  React.useEffect(() => {
    GetFromStorage("Onboard-completed").then((res) => {
      if (res) {
        setShowOnboarding(false);
      }
    });
  }, []);
  return (
    <Stack.Navigator initialRouteName={showOnboarding ? "Onboarding" : "Root"}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen}></Stack.Screen>
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerStyle: { backgroundColor: "#fffffff3" },
        }}>
        <Stack.Screen
          name="CameraModal"
          options={{
            title: "Identiﬁcation",
            headerTitleAlign: "center",
            headerTitleStyle: { color: Colors.light.primary },
          }}
          component={CameraModal}></Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
        tabBarHideOnKeyboard: true,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeRootScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />,
          headerShown: false,
          tabBarShowLabel: false,
          headerTransparent: true,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
