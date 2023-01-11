import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import Layout from "../constants/Layout";
import { useTranslation } from "react-i18next";
import { Text, View } from "./Themed";

type Props = {
  username?: string;
};

const GradientCard = ({ username }: Props) => {
  const { t } = useTranslation();
  return (
    <LinearGradient
      colors={["#018ffa", "#015696"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.Card}>
      <View style={styles.BalanceContainer}>
        <View>
          <Text style={styles.balanceText}>{t("YourBalance")}</Text>
          <Text numberOfLines={1} style={styles.balanceNum}>
            475,250 {t("IQD")}
          </Text>
        </View>
        <AntDesign name="wallet" color="white" size={23} />
      </View>
      <View style={styles.UsernameContainer}>
        <Text style={styles.balanceText}>{t("Username")}</Text>
        <Text numberOfLines={1} style={styles.UsernameText}>
          {username ? username : "Unknown"}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default GradientCard;

const styles = StyleSheet.create({
  Card: {
    width: "100%",
    height: Layout.window.width / 2,
    maxHeight: 300,
    borderRadius: 15,
    padding: "7%",
    display: "flex",
    justifyContent: "space-between",
    direction: Layout.isRTL ? "rtl" : "ltr",
  },
  BalanceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceText: {
    color: "#ffffffb0",
    opacity: 0.5,
    fontFamily: "dm-sans",
    fontSize: 17,
  },
  balanceNum: {
    color: "white",
    fontFamily: "dm-sans-bold",
    fontSize: 25,
    marginVertical: 2,
  },
  UsernameContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  UsernameText: {
    color: "white",
    fontFamily: "dm-sans",
    fontSize: 20,
    textAlign: "left",
    // writingDirection: "rtl",
  },
});
