import { Divider } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import MyDivider from "./Divider";

type Props = {
  Avatar?: React.ReactNode;
  HeaderContent?: React.ReactNode;
  Main?: React.ReactNode;
  DividerColor?: string;
};

const ListCard = ({ HeaderContent, Main, Avatar, DividerColor }: Props) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.headerList}>
          <View>{Avatar}</View>
          {HeaderContent}
        </View>
        {Main}
      </View>

      <MyDivider
        type="full"
        color={DividerColor ? DividerColor : "#dadada79"}
      />
    </>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
    paddingVertical: "5%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  headerList: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
  },
});
