import { StyleSheet, Text, View } from "react-native";

type Props = {
  Icon?: React.ReactNode;
  Title?: string;
  description?: string;
  RightText?: string | undefined;
  EndIcon?: React.ReactNode;
};
export default function UserAccount({
  EndIcon,
  Icon,
  RightText,
  Title,
  description,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.AvatarContainer}>
        {Icon}
        <View style={styles.textContainer}>
          {Title && <Text style={styles.username}>{Title}</Text>}
          {description && <Text style={styles.phone}>{description}</Text>}
        </View>
      </View>
      {RightText && <Text style={styles.AccStatusText}>{RightText}</Text>}
      {EndIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 15,
    padding: "5%",
    marginVertical: "5%",
  },

  AvatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  username: {
    color: "black",
    fontFamily: "dm-sans-bold",
    fontSize: 13,
  },
  phone: {
    color: "gray",
    opacity: 0.5,
    fontSize: 10,
  },
  textContainer: {
    paddingHorizontal: "4%",
  },
  AccStatusText: {
    color: "orange",
    padding: "2%",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#ffdd9ebe",
    fontSize: 10,
  },
});
