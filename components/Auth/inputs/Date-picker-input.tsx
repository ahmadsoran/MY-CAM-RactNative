import timeConverter from "../../../util/TimeConverter";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../../../constants/Colors";
import { Text, View } from "../../Themed";
import Layout from "../../../constants/Layout";

export default function DatePickerInput() {
  const setBrd = UserRegisterStore((state) => state.setBrd);
  const Brd = UserRegisterStore((state) => state.brd);
  const [ShowDate, setShowDate] = useState(false);
  const DatePickerHandler = (e: number) => {
    if (e) {
      setBrd(timeConverter(e, Layout.isRTL ? "rtl" : "ltr"));
    }
  };
  const ShowDateHandler = () => {
    setShowDate(!ShowDate);
  };
  return (
    <View style={styles.DateContainer}>
      <Text style={styles.label}>Date Of Birth</Text>
      <Pressable style={styles.dateInput} onPress={ShowDateHandler}>
        <MaterialIcons name="date-range" size={20} color={"#80808081"} />
        <Text style={styles.text}>{Brd ? Brd : "Select Date"}</Text>
      </Pressable>

      <DateTimePickerModal
        isVisible={ShowDate}
        onCancel={ShowDateHandler}
        onConfirm={(e) => {
          DatePickerHandler(e.getTime());
          ShowDateHandler();
        }}
        isDarkModeEnabled={false}
        textColor={Colors.light.text}
        maximumDate={new Date(Date.now())}
        minimumDate={new Date(1930, 1, 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontFamily: "dm-sans",
    marginHorizontal: "5%",
    fontSize: 17,
  },
  dateInput: {
    borderBottomWidth: 0,
    backgroundColor: "#f4f5f7",
    padding: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  DateContainer: {
    padding: 10,
    backgroundColor: "transparent",
  },
  label: {
    opacity: 0.6,
    fontFamily: "dm-sans",
    fontSize: 15,
    marginVertical: 10,
    color: "gray",
  },
});
