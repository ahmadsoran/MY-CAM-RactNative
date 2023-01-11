import { TransactionButtonsType } from "../@types/TransactionButtons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export const TransactionButtons: TransactionButtonsType[] = [
  {
    name: "Send",
    position: "left",
    Icon: (
      <MaterialCommunityIcons
        name="bank-transfer-out"
        size={30}
        color={Colors.light.primary}
      />
    ),
    bg: "#d9eeff",
    width: "48%",
    textColor: Colors.light.primary,
  },
  {
    name: "Recieve",
    position: "left",
    Icon: (
      <MaterialCommunityIcons
        name="bank-transfer-in"
        size={30}
        color={Colors.light.primary}
      />
    ),
    bg: "#d9eeff",
    width: "48%",
    textColor: Colors.light.primary,
  },
  {
    name: "Deposit",
    position: "top",
    Icon: (
      <MaterialIcons
        name="attach-money"
        size={30}
        color={Colors.light.primary}
      />
    ),
    bg: "whitesmoke",
    textColor: "black",
    width: Layout.window.width / 3.9,
  },
  {
    name: "Withdraw",
    position: "top",
    Icon: (
      <MaterialIcons
        name="attach-money"
        size={30}
        color={Colors.light.primary}
      />
    ),
    bg: "whitesmoke",
    textColor: "black",
    width: Layout.window.width / 3.9,
  },
  {
    name: "History",
    position: "top",
    Icon: (
      <MaterialIcons name="history" size={30} color={Colors.light.primary} />
    ),
    bg: "whitesmoke",
    textColor: "black",
    width: Layout.window.width / 3.9,
  },
];
