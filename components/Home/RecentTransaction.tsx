import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import RecentTransactionList from "../../Data/RecentTransactionList";
import timeConverter from "../../util/TimeConverter";
import ListCard from "../ListCard";

const RecentTransaction = () => {
  return (
    <View>
      <Text style={styles.headerText}>Recent Transactions</Text>
      {RecentTransactionList?.filter((data) => data.Type !== "requested").map(
        (data, i) => (
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
                <Text style={styles.date}>{timeConverter(data.Date)}</Text>
              </View>
            }
            Main={
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  color:
                    data.Type === "recieved" ? Colors.light.primary : "red",
                  maxWidth: 100,
                }}>
                {data.Type === "recieved" ? "+" : "-"} $
                {data.Amount.toLocaleString()}
              </Text>
            }
          />
        )
      )}
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
  },
});
