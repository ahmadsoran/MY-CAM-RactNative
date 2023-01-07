import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import MyDivider from "../../components/Divider";
import UserAccount from "../../components/Profile/UserAccount";
import Colors from "../../constants/Colors";
import { UserData } from "../../States/User/UserData";

import { RootTabScreenProps } from "../../types";

export default function ProfileScreen({}: RootTabScreenProps<"Profile">) {
  const userData = UserData((state) => state.UserData);

  return (
    <SafeAreaView style={{ backgroundColor: "#f4f5f7" }}>
      <StatusBar style="dark" />
      <ScrollView scrollEnabled fadingEdgeLength={20}>
        <View style={styles.container}>
          <UserAccount
            Icon={
              <AntDesign
                style={styles.avatar}
                name="user"
                color="white"
                size={25}
              />
            }
            EndIcon={
              <MaterialCommunityIcons
                name="arrow-right"
                size={25}
                color="gray"
              />
            }
            RightText="Unverified"
            Title={userData?.name}
            description={"8292-223-232"}
          />
          <View style={styles.settingsContanier}>
            <Text style={styles.SettingText}>General</Text>
            <MyDivider type="full" color="#80808046" />
            <UserAccount
              Icon={<Entypo name="location-pin" color="#5c4eaf" size={25} />}
              Title="Address"
              EndIcon={
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={25}
                  color="gray"
                />
              }
            />
            <UserAccount
              Icon={<MaterialIcons name="history" color="orange" size={25} />}
              Title="Transaction histroy"
              EndIcon={
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={25}
                  color="gray"
                />
              }
            />
            <UserAccount
              Icon={
                <Feather name="users" color={Colors.light.primary} size={25} />
              }
              Title="Contract"
              EndIcon={
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={25}
                  color="gray"
                />
              }
            />
          </View>
          <UserAccount
            Icon={<EvilIcons name="gear" color="gray" size={25} />}
            EndIcon={
              <MaterialCommunityIcons
                name="arrow-right"
                size={25}
                color="gray"
              />
            }
            Title={"Settings"}
          />
          <UserAccount
            Icon={
              <Ionicons name="md-help-buoy-outline" color="gray" size={25} />
            }
            EndIcon={
              <MaterialCommunityIcons
                name="arrow-right"
                size={25}
                color="gray"
              />
            }
            Title={"Help Center"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f4f5f7",
    paddingHorizontal: "8%",
    paddingVertical: "15%",
  },
  avatar: {
    backgroundColor: "#ae0bff",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  settingsContanier: {
    backgroundColor: "white",
    // padding: "8%",
    borderRadius: 10,
  },
  SettingText: {
    color: "black",
    fontFamily: "dm-sans-bold",
    fontSize: 17,
    marginHorizontal: "8%",
    marginTop: "9%",
  },
});
