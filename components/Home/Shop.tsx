import { AntDesign } from "@expo/vector-icons";
import { t } from "i18next";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";

export default function Shop() {
  return (
    <View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{t("Shop")}</Text>
        <Text style={styles.ComingSoon}>{t("ComingSoon")}</Text>
      </View>
      <View style={styles.shopCardContainer}>
        <View>
          <Text style={styles.ShopText}>{t("Shop")}</Text>
          <Text style={styles.Description}>{t("ComingSoon")}</Text>
        </View>
        <AntDesign name="shoppingcart" color="white" size={50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: "black",
    fontFamily: "dm-sans-bold",
    fontSize: 16,
  },
  headerTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ComingSoon: {
    backgroundColor: "#d9eeff",
    marginHorizontal: "3%",
    padding: "2%",
    borderRadius: 5,
    overflow: "hidden",
    color: Colors.light.primary,
    fontFamily: "dm-sans",
  },
  shopCardContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "10%",
    width: "100%",
    backgroundColor: Colors.light.primary,
    borderRadius: 15,
    paddingVertical: "15%",
    marginTop: "10%",
  },
  ShopText: {
    color: "white",
    fontFamily: "dm-sans-bold",
    fontSize: 26,
  },
  Description: {
    color: "white",
    fontFamily: "dm-sans",
    fontSize: 18,
    opacity: 0.65,
  },
});
