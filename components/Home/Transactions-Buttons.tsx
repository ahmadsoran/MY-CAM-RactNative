import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../Custom-Button";
import { TransactionButtons } from "../../Data/TransactionButtons";
import Layout from "../../constants/Layout";

const SendReciveButtons = () => {
  return (
    <View style={styles.Send_ReciveContainer}>
      {TransactionButtons?.map((btn, i) => (
        <CustomButton
          key={i}
          ExtraButtonStyle={styles.Send_ReciveButton}
          title={btn.name}
          bg={btn.bg}
          icon={btn.Icon}
          iconPosition={btn.position}
          TextSpace={20}
          containerStyle={[
            styles.Send_ReciveButtonContanier,
            { width: btn.width },
          ]}
          titleStyle={{
            fontSize: Layout.window.width / 25,
            color: btn.textColor,
            marginHorizontal: btn.position === "left" ? 10 : 0,
          }}
        />
      ))}
    </View>
  );
};

export default SendReciveButtons;

const styles = StyleSheet.create({
  Send_ReciveContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Send_ReciveButton: {
    paddingVertical: "15%",
  },
  Send_ReciveButtonContanier: {
    marginVertical: "2%",
  },
});
