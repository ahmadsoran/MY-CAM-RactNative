import { AntDesign, Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CustomButton from "../../components/Custom-Button";
import MyDivider from "../../components/Divider";
import ListCard from "../../components/ListCard";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import RecentTransactionList from "../../Data/RecentTransactionList";
import { RootTabScreenProps } from "../../@types/Navigation";
import { Text, View } from "../../components/Themed";

export default function InboxScreen({}: RootTabScreenProps<"inbox">) {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar style="dark" />
      <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: "15%", paddingHorizontal: "7%" }}>
          <Text style={styles.headerText}>New Notiﬁcation</Text>
        </View>
        <MyDivider
          type="full"
          color="#80808046"
          height={"200%"}
          CustomStyle={{ marginBottom: "3%", marginTop: "5%" }}
        />

        <View style={styles.container}>
          {RecentTransactionList?.filter(
            (data) =>
              new Date(data.Date).getFullYear() === new Date().getFullYear()
          )
            .sort((a, b) => {
              const statusValues = { recieved: 0, send: 1, requested: 2 };
              return statusValues[a.Type] - statusValues[b.Type];
            })
            .map((data, i) =>
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
                      <Text style={styles.Username}>
                        {data.Type === "recieved"
                          ? "Money Received"
                          : "Send Money"}
                      </Text>
                      {data.Type === "recieved" ? (
                        <Text style={styles.date}>
                          <Text style={styles.link}>{data.Username}</Text> sent
                          you {data.Amount}$ via transfer
                        </Text>
                      ) : (
                        <Text style={styles.date}>
                          You sent {data.Amount}$ to{" "}
                          <Text style={styles.link}>{data.Username}</Text> via
                          transfer
                        </Text>
                      )}
                    </View>
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
                            onPress={() =>
                              alert(data.Username + " is Pareshan")
                            }
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
          <View style={{ paddingTop: "5%" }}>
            <Text style={styles.headerText}>Earlier Notiﬁcation</Text>
          </View>
          <MyDivider
            type="full"
            color="#80808046"
            height={"200%"}
            CustomStyle={{ marginBottom: "3%", marginTop: "5%" }}
          />
          {RecentTransactionList?.filter(
            (data) =>
              new Date(data.Date).getFullYear() < new Date().getFullYear()
          )?.map((data, i) => (
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
                  <Text style={styles.Username}>
                    {data.Type === "recieved" ? "Money Received" : "Send Money"}
                  </Text>
                  {data.Type === "recieved" ? (
                    <Text style={styles.date}>
                      <Text style={styles.link}>{data.Username}</Text> sent you{" "}
                      {data.Amount}$ via transfer
                    </Text>
                  ) : (
                    <Text style={styles.date}>
                      You sent {data.Amount}$ to{" "}
                      <Text style={styles.link}>{data.Username}</Text> via
                      transfer
                    </Text>
                  )}
                </View>
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: "7%",
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
    maxWidth: Layout.window.width / 1.5,
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
  link: {
    color: Colors.light.primary,
  },
});
