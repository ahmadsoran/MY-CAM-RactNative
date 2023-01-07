/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
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
import Device from "../constants/Device";
import Layout from "../constants/Layout";
import useColorScheme from "../hooks/useColorScheme";
import OTPScreen from "../screens/Auth/OTP/Screen";
import AuthScreen from "../screens/Auth/Screen";
import HomeRootScreen from "../screens/Home/Screen";
import InboxScreen from "../screens/inbox/Screen";
import CameraModal from "../screens/Modal/CameraModal";
import NotFoundScreen from "../screens/NotFoundScreen";
import OnboardingScreen from "../screens/onboarding/Screen";
import ProfileScreen from "../screens/Profile/Screen";
import QrScreen from "../screens/Qr/Screen";
import TopUpScreen from "../screens/TopUp/Screen";
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
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Device.isIOS
            ? Layout.window.height / 8
            : Layout.window.height / 9,
          backgroundColor: "white",
        },
        tabBarItemStyle: {
          margin: 5,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeRootScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={29} color={color} />
          ),
          headerShown: false,
          headerTransparent: true,
          tabBarLabelStyle: {
            fontFamily: "dm-sans-bold",
            fontSize: 13,
          },
        })}
      />
      <BottomTab.Screen
        name="TopUp"
        component={TopUpScreen}
        options={({ navigation }: RootTabScreenProps<"TopUp">) => ({
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="money-check-alt" size={29} color={color} />
          ),
          headerShown: false,
          headerTransparent: true,
          tabBarLabelStyle: {
            fontFamily: "dm-sans-bold",
            fontSize: 13,
          },
        })}
      />
      <BottomTab.Screen
        name="Qr"
        component={QrScreen}
        options={({ navigation }: RootTabScreenProps<"Qr">) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={29}
              color="white"
            />
          ),
          headerShown: false,
          headerTransparent: true,
          tabBarLabel: "",
          tabBarIconStyle: {
            backgroundColor: Colors.light.primary,
            width: 50,
            borderRadius: 10,
          },
        })}
      />
      <BottomTab.Screen
        name="inbox"
        component={InboxScreen}
        options={({ navigation }: RootTabScreenProps<"inbox">) => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications-none" size={29} color={color} />
          ),
          headerShown: false,
          headerTransparent: true,
          tabBarLabelStyle: {
            fontFamily: "dm-sans-bold",
            fontSize: 13,
          },
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<"Profile">) => ({
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={29} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "dm-sans-bold",
            fontSize: 13,
          },
          headerRight: () => (
            <Ionicons name="notifications-outline" size={30} color="gray" />
          ),
          headerRightContainerStyle: { paddingHorizontal: 10 },
          headerStyle: {
            backgroundColor: "#f4f5f7",
          },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTitleStyle: { color: "black", fontFamily: "dm-sans-bold" },
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
