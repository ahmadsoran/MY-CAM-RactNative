import { Ionicons, Octicons } from "@expo/vector-icons";
import { t } from "i18next";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { Text, View } from "../Themed";

const ImageCards = [
  {
    name: "Electricity",
    icon: <Octicons name="light-bulb" size={25} color="#7fc3ac" />,
    bg: "#f0fff6",
  },
  {
    name: "Water",
    icon: <Ionicons name="water-outline" size={25} color="#a8a1d4" />,
    bg: "#f4f2ff",
  },
  {
    name: "Internet",
    icon: <Ionicons name="wifi-outline" size={25} color="#7fa8e5" />,
    bg: "#eef5ff",
  },
  {
    name: "Television",
    icon: <Ionicons name="tv-outline" size={25} color="#ee9a85" />,
    bg: "#fff5f2",
  },
];

const BillPay = () => {
  return (
    <View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{t("BillPay")}</Text>
        <Text style={styles.ComingSoon}>{t("ComingSoon")}</Text>
      </View>
      <View style={styles.IconsContainer}>
        {ImageCards?.map((data, i) => (
          <View key={i} style={styles.icon}>
            <View
              style={{
                backgroundColor: data.bg,
                padding: "10%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                width: Layout.window.width / 6,
                height: Layout.window.width / 6,
              }}>
              {data.icon}
            </View>
            <Text style={styles.text}>{t(data.name)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BillPay;

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
    marginHorizontal: "4%",
    padding: "2%",
    borderRadius: 5,
    overflow: "hidden",
    color: Colors.light.primary,
    fontFamily: "dm-sans-bold",
    fontSize: 13,
  },
  IconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "5%",
  },
  icon: {
    height: "100%",
  },
  text: {
    color: "#8080808a",
    fontFamily: "dm-sans-bold",
    fontSize: 12,
    marginVertical: 10,
    textAlign: "center",
  },
});
