import HorizontalList from "../Horizontal-list";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
type Props = {
  name: string | undefined;
};
export default function UserAccount({ name }: Props) {
  return (
    <HorizontalList
      Icon={
        <AntDesign style={styles.avatar} name="user" color="white" size={25} />
      }
      EndIcon={
        <MaterialCommunityIcons name="arrow-right" size={25} color="gray" />
      }
      RightText="Unverified"
      Title={name ? name : "Saman Saman"}
      description={"8292-223-232"}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "#ae0bff",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
