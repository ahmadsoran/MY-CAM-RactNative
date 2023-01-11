import MyDivider from "../Divider";
import HorizontalList from "../Horizontal-list";
import {
  Entypo,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";
import { I18nManager, StyleSheet } from "react-native";
import UserLanguageStore, {
  languages,
} from "../../States/App-settings/Language";
import { SetToStorage } from "../../hooks/AsyncStorage";
import { useTranslation } from "react-i18next";
import RNRestart from "react-native-restart";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserSettingsList = () => {
  const { i18n } = useTranslation();
  function ChangeLanguageHandler(lng: languages) {
    setUserLanguage(lng);
    i18n.changeLanguage(lng);
    SetToStorage("lng", lng);
    I18nManager.forceRTL(lng === "en" ? false : true);
    RNRestart.Restart();
  }

  const UserLanguage = UserLanguageStore((state) => state.lng);
  const setUserLanguage = UserLanguageStore((state) => state.setLng);
  return (
    <>
      <View style={styles.settingsContanier}>
        <Text style={styles.SettingText}>General</Text>
        <MyDivider
          type="full"
          color="#80808046"
          CustomStyle={{ marginVertical: 0 }}
        />
        <HorizontalList
          Icon={<Entypo name="location-pin" color="#5c4eaf" size={25} />}
          Title="Address"
          EndIcon={
            <MaterialCommunityIcons name="arrow-right" size={25} color="gray" />
          }
          CustomStyle={{ marginVertical: 0, paddingVertical: "5%" }}
        />
        <HorizontalList
          Icon={<MaterialIcons name="history" color="orange" size={25} />}
          Title="Transaction histroy"
          EndIcon={
            <MaterialCommunityIcons name="arrow-right" size={25} color="gray" />
          }
          CustomStyle={{ marginVertical: 0, paddingVertical: "5%" }}
        />
        <MyDivider
          type="full"
          color="#80808046"
          CustomStyle={{ marginVertical: 0, marginHorizontal: "6%" }}
        />
        <HorizontalList
          Icon={<Feather name="users" color={Colors.light.primary} size={25} />}
          Title="Contract"
          EndIcon={
            <MaterialCommunityIcons name="arrow-right" size={25} color="gray" />
          }
          CustomStyle={{ marginVertical: 0, paddingVertical: "5%" }}
        />
      </View>
      <HorizontalList
        Icon={<EvilIcons name="gear" color="gray" size={25} />}
        EndIcon={
          <MaterialCommunityIcons name="arrow-right" size={25} color="gray" />
        }
        Title={"Settings"}
        CustomStyle={{ marginTop: 15, paddingVertical: "5%" }}
      />
      <HorizontalList
        Icon={<Ionicons name="md-help-buoy-outline" color="gray" size={25} />}
        EndIcon={
          <MaterialCommunityIcons name="arrow-right" size={25} color="gray" />
        }
        Title={"Help Center"}
        CustomStyle={{ marginVertical: 0, paddingVertical: "5%" }}
      />
      <HorizontalList
        Icon={<Ionicons name="language-outline" color="gray" size={25} />}
        EndIcon={<Text>{UserLanguage}</Text>}
        Title={"Language"}
        CustomStyle={{ marginTop: 15, paddingVertical: "5%" }}
        onPress={() =>
          ChangeLanguageHandler(UserLanguage === "ar" ? "en" : "ar")
        }
      />
      <HorizontalList
        Icon={<Ionicons name="trash-outline" color="red" size={25} />}
        Title={"Clear data"}
        onPress={() =>
          AsyncStorage.clear().then(() => {
            RNRestart.Restart();
            I18nManager.forceRTL(false);
          })
        }
      />
    </>
  );
};

export default UserSettingsList;
const styles = StyleSheet.create({
  settingsContanier: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  SettingText: {
    color: "black",
    fontFamily: "dm-sans-bold",
    fontSize: 13.5,
    marginHorizontal: "8%",
    marginVertical: "5%",
  },
});
