import { AntDesign } from "@expo/vector-icons";
import { t } from "i18next";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import RecentTransactionList from "../../Data/RecentTransactionList";
import timeConverter from "../../util/TimeConverter";
import ListCard from "../ListCard";
import { Text, View } from "../Themed";

const RecentTransaction = () => {
  return (
    <View>
      <Text style={styles.headerText}>{t("RecentTransactions")}</Text>
      {RecentTransactionList?.filter(
        (data) =>
          data.Type !== "requested" &&
          new Date(data.Date).getFullYear() ===
            new Date(Date.now()).getFullYear()
      ).map((data, i) => (
        <ListCard
          key={i}
          Avatar={
            <AntDesign
              style={{
                backgroundColor:
                  data.Type === "recieved" ? "#d9eefe" : "#fae1db",
                padding: "2.5%",
                borderRadius: 5,
                overflow: "hidden",
              }}
              name="user"
              color={data.Type === "recieved" ? Colors.light.primary : "red"}
              size={25}
            />
          }
          HeaderContent={
            <View style={styles.ListTextContainer}>
              <Text style={styles.Username}>{data.Username}</Text>
              <Text style={styles.date}>
                {timeConverter(data.Date, Layout.isRTL ? "rtl" : "ltr")}
              </Text>
            </View>
          }
          Main={
            <Text
              numberOfLines={1}
              style={{
                fontSize: 20,
                color: data.Type === "recieved" ? Colors.light.primary : "red",
                maxWidth: 100,
              }}>
              {data.Type === "recieved" ? "+" : "-"} ${data.Amount}
            </Text>
          }
        />
      ))}
    </View>
  );
};

export default RecentTransaction;

const styles = StyleSheet.create({
  headerText: {
    color: "black",
    fontFamily: "dm-sans-bold",
    fontSize: 16,
  },
  ListTextContainer: {
    marginHorizontal: 10,
  },
  Username: {
    fontFamily: "dm-sans-bold",
    color: "black",
    fontSize: 16,
  },
  date: {
    color: "black",
    opacity: 0.4,
    textAlign: "left",
  },
});
