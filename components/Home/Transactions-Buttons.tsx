import { StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../Custom-Button";
import { TransactionButtons } from "../../Data/TransactionButtons";
import Layout from "../../constants/Layout";
import { View } from "../Themed";
import { useTranslation } from "react-i18next";

const SendReciveButtons = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.Send_ReciveContainer}>
      {TransactionButtons?.map((btn, i) => (
        <CustomButton
          key={i}
          ExtraButtonStyle={styles.Send_ReciveButton}
          title={t(btn.name) || ""}
          bg={btn.bg}
          icon={btn.Icon}
          iconPosition={btn.position}
          TextSpace={20}
          containerStyle={[
            styles.Send_ReciveButtonContanier,
            { width: btn.width },
          ]}
          titleStyle={{
            fontSize:
              typeof btn?.width === "string"
                ? Layout.window.width - 0.96 * Layout.window.width
                : Layout.window.width - 0.97 * Layout.window.width,
            color: btn.textColor,
            marginHorizontal: btn.position === "left" ? 10 : 0,
            fontFamily: "dm-sans",
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
    marginTop: "2%",
  },
  Send_ReciveButton: {
    paddingVertical: "15%",
    height: 70,
  },
  Send_ReciveButtonContanier: {
    marginVertical: "2%",
    borderRadius: 10,
  },
});
