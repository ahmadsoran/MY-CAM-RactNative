import { AntDesign, Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/Custom-Button";
import MyDivider from "../../components/Divider";
import ListCard from "../../components/ListCard";
import Colors from "../../constants/Colors";
import RecentTransactionList from "../../Data/RecentTransactionList";
import { UserData } from "../../States/User/UserData";

import { RootTabScreenProps } from "../../types";
import timeConverter from "../../util/TimeConverter";

export default function InboxScreen({}: RootTabScreenProps<"Profile">) {
  const userData = UserData((state) => state.UserData);

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.headerText}>New Notiﬁcation</Text>
        <MyDivider
          type="full"
          color="#80808046"
          height={"200%"}
          CustomStyle={{ marginBottom: 0 }}
        />
        <ScrollView
          scrollEnabled
          fadingEdgeLength={20}
          showsVerticalScrollIndicator={false}>
          {RecentTransactionList?.sort((a, b) => {
            const statusValues = { recieved: 0, send: 1, requested: 2 };
            return statusValues[a.Type] - statusValues[b.Type];
          }).map((data, i) =>
            data.Type !== "requested" ? (
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
                    color={
                      data.Type === "recieved" ? Colors.light.primary : "red"
                    }
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
            ) : (
              <ListCard
                key={i}
                Avatar={
                  <Entypo
                    style={{
                      backgroundColor: "#004b19",
                      padding: "2.5%",
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                    name="emoji-happy"
                    color={"white"}
                    size={25}
                  />
                }
                HeaderContent={
                  <View>
                    <View style={styles.ListTextContainer}>
                      <Text style={styles.Username}>{data.Username}</Text>
                      <Text style={styles.date}>
                        <Text
                          onPress={() => alert(data.Username + " is Pareshan")}
                          style={{ color: "#0077ff" }}>
                          {data.Username}
                        </Text>{" "}
                        Requested {data.Amount}$
                      </Text>
                    </View>
                    <View style={styles.RequestedButtonContainer}>
                      <CustomButton
                        buttonStyle={styles.DetailBtn}
                        text="Details"
                        textColor={Colors.light.primary}
                      />
                      <CustomButton
                        buttonStyle={styles.AcceptBtn}
                        text="Accept"
                        textColor={"red"}
                      />
                    </View>
                  </View>
                }
              />
            )
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: "8%",
    paddingTop: "15%",
  },
  content: {
    paddingVertical: 10,
  },
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
  RequestedButtonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  DetailBtn: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#d7f1ff",
  },
  AcceptBtn: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#ffd7d7",
  },
});
