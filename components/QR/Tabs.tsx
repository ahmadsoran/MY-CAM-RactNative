import { MotiView } from "moti";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import CustomButton from "../Custom-Button";
import { Text, View } from "../Themed";

type Props = {
  index: number;
  onChange(e: number): void;
};

const MyTabs = ({ index, onChange }: Props) => {
  const { t } = useTranslation();
  const TabsButton = [
    {
      title: t("Send"),
    },
    {
      title: t("Receive"),
    },
  ];
  return (
    <View style={styles.container}>
      {TabsButton?.map((data, i) => (
        <CustomButton
          key={i}
          onPress={() => onChange(i)}
          buttonStyle={styles.textContainer}>
          <Text
            style={[
              styles.text,
              index === i
                ? { color: Colors.light.primary }
                : { color: "black", opacity: 0.5 },
            ]}>
            {data.title}
          </Text>
        </CustomButton>
      ))}

      <MotiView
        style={styles.indicatorActive}
        // animate={[index === 0 && { left: 0 }, index === 1 && { right: 0 }]}
        animate={{
          left: index === 0 ? 0 : "50%",
          right: index === 1 ? 0 : "50%",
        }}
        transition={{
          duration: 300,
          delay: 80,
          type: "timing",
        }}
      />
      <View style={styles.indicatorInactive} />
    </View>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    marginVertical: 15,
    top: "-20%",
  },
  textContainer: {
    backgroundColor: "transparent",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "dm-sans-bold",
  },
  indicatorActive: {
    backgroundColor: Colors.light.primary,
    width: "50%",
    height: 2,
    position: "absolute",
    bottom: -10,
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
  },
  indicatorInactive: {
    backgroundColor: "gray",
    width: "100%",
    height: 2,
    position: "absolute",
    bottom: -10,
    left: 0,
    borderRadius: 100,
    zIndex: -1,
    opacity: 0.2,
  },
});
