import timeConverter from "../../../util/TimeConverter";
import { UserRegisterStore } from "../../../States/Auth/Signup/Inputs";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import MyInput from "../../Input";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../../../constants/Colors";
import { Text } from "../../Themed";

export default function DatePickerInput() {
  const setBrd = UserRegisterStore((state) => state.setBrd);
  const Brd = UserRegisterStore((state) => state.brd);
  const [ShowDate, setShowDate] = useState(false);
  const DatePickerHandler = (e: number) => {
    if (e) {
      setBrd(timeConverter(e));
    }
  };
  const ShowDateHandler = () => {
    setShowDate(!ShowDate);
  };
  return (
    <>
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
        textColor={Colors.light.primary}
        maximumDate={new Date(Date.now())}
        minimumDate={new Date(1930, 1, 1)}
      />
    </>
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
    marginHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
});
