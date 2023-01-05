import { StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Text, View } from "./Themed";
import { AnimatePresence, View as MotiView } from "moti";
import UUID from "react-native-uuid";
import { CheckBox } from "@rneui/themed";
type Props = {
  setSelected(val: string): void;
  SelectedTEXT: string;
  label: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  data: string[];
};

export default function DropDownInput({
  SelectedTEXT,
  label,
  setSelected,
  leftIcon,
  rightIcon,
  data,
}: Props) {
  const [ShowModal, setShowModal] = useState(false);
  const ShowModalHandelr = () => {
    setShowModal(!ShowModal);
  };
  const id = UUID.v4().toString();
  return (
    <View style={styles.DropDownContainer}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.DropDownInput} onPress={ShowModalHandelr}>
        <View style={styles.inputDivider}>
          {leftIcon}
          <Text style={styles.text}>
            {SelectedTEXT ? SelectedTEXT : "Select DropDown"}
          </Text>
        </View>
        {rightIcon}
      </TouchableOpacity>

      {ShowModal && (
        <View key={id} style={styles.dropdown}>
          {data?.map((e) => (
            <CheckBox
              checked={SelectedTEXT === e ? true : false}
              title={e}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => setSelected(e)}
            />
          ))}
        </View>
      )}
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
  DropDownInput: {
    borderBottomWidth: 0,
    backgroundColor: "#f4f5f7",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  DropDownContainer: {
    padding: 10,
    position: "relative",
    backgroundColor: "transparent",
  },
  label: {
    opacity: 0.6,
    fontFamily: "dm-sans",
    fontSize: 15,
    marginVertical: 10,
    color: "gray",
  },
  dropdown: {
    backgroundColor: "whitesmoke",
    paddingVertical: 20,
    borderRadius: 5,
    width: "100%",
    bottom: 0,
    right: 0,
    left: 0,
    shadowColor: "black",
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginVertical: 10,
  },
  inputDivider: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
});
